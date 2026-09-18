"use client";

import { useState, type ChangeEvent } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  as?: "input" | "textarea";
  type?: string;
  required?: boolean;
}

/**
 * Champ générique du formulaire Contact — ligne fine (jamais de cadre
 * plein), label en petites capitales Inter au-dessus. États visuels
 * verrouillés (verrouillage-contenu §07) :
 * normal → ligne rgba(0,0,0,.25) ; focus → ligne verte ; erreur → ligne
 * rouge sourd (--color-error) + message court sous le champ.
 */
export function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  as = "input",
  type = "text",
  required,
}: FormFieldProps) {
  const [focused, setFocused] = useState(false);

  const borderClass = error
    ? "border-error"
    : focused
      ? "border-green"
      : "border-black/25";

  const sharedProps = {
    id,
    value,
    placeholder,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className: `w-full bg-transparent font-body text-[15px] text-black placeholder:text-black/30 pb-2.5 border-b outline-none transition-colors duration-200 ease-editorial motion-reduce:transition-none ${borderClass}`,
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-body font-semibold text-[11px] tracking-[.12em] uppercase text-black/50 mb-2.5"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea rows={3} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      {error && (
        <div className="font-body text-[11.5px] text-error mt-2 animate-fade-in-up motion-reduce:animate-none">
          {error}
        </div>
      )}
    </div>
  );
}
