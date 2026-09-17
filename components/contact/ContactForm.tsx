"use client";

import { useState, type FormEvent } from "react";
import { FormField } from "@/components/contact/FormField";
import { contactFields, poleFieldNote, submitButtonLabel, formStates } from "@/content/contact";
import { sendContactForm } from "@/lib/sendContactForm";

type Status = "idle" | "submitting" | "success" | "failure";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulaire Contact fonctionnel. Câblé sur le simulateur local
 * (lib/sendContactForm) — aucun service externe tant que la Phase 5 n'est
 * pas atteinte. Les 6 états visuels suivent content/contact.ts →
 * formStates, sans reformulation.
 */
export function ContactForm({ pole }: { pole?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setGlobalError(null);

    const errors: typeof fieldErrors = {};
    if (!name.trim()) errors.name = "Ce champ est requis.";
    if (!email.trim() || !EMAIL_RE.test(email.trim())) {
      errors.email = "Merci d'indiquer une adresse email valide.";
    }
    if (!message.trim()) errors.message = "Ce champ est requis.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    const result = await sendContactForm({ name, email, message, pole });
    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("failure");
      setGlobalError(formStates.failure.message ?? null);
    }
  }

  if (status === "success") {
    return <p className="font-body text-base text-black/75 max-w-md">{formStates.success.message}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9 max-w-xl">
      {status === "failure" && globalError && (
        <div className="font-body text-sm text-black/75">{globalError}</div>
      )}

      <FormField
        id="name"
        label={contactFields.name.label}
        placeholder={contactFields.name.placeholder}
        value={name}
        onChange={setName}
        error={fieldErrors.name}
        required
      />
      <FormField
        id="email"
        type="email"
        label={contactFields.email.label}
        placeholder={contactFields.email.placeholder}
        value={email}
        onChange={setEmail}
        error={fieldErrors.email}
        required
      />
      <FormField
        id="message"
        as="textarea"
        label={contactFields.message.label}
        placeholder={contactFields.message.placeholder}
        value={message}
        onChange={setMessage}
        error={fieldErrors.message}
        required
      />

      <div className="font-body italic text-xs text-black/35">{poleFieldNote}</div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-black text-white font-body font-medium text-sm px-8 py-4 w-fit disabled:opacity-60"
      >
        {status === "submitting" ? formStates.submitting.message : submitButtonLabel}
      </button>
    </form>
  );
}
