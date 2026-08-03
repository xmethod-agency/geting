"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  message: z.string().min(10, "Please write at least a few sentences"),
  hp: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { hp: "" },
  });

  async function onSubmit(data: FormData) {
    if (data.hp) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-accent/20 rounded-lg bg-accent/5 p-8">
        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] mb-4" />
        <p className="text-white text-lg font-medium tracking-tight">
          Message received.
        </p>
        <p className="mt-2 text-sm text-stone">
          We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="hp">Leave empty</label>
        <input id="hp" type="text" tabIndex={-1} autoComplete="off" {...register("hp")} />
      </div>

      <Field label="Name" error={errors.name?.message} id="name">
        <input
          id="name"
          {...register("name")}
          className="form-input"
          aria-invalid={!!errors.name}
        />
      </Field>

      <Field label="Email" error={errors.email?.message} id="email">
        <input
          id="email"
          {...register("email")}
          type="email"
          className="form-input"
          aria-invalid={!!errors.email}
        />
      </Field>

      <Field label="Company" error={errors.company?.message} id="company" optional>
        <input id="company" {...register("company")} className="form-input" />
      </Field>

      <Field label="Message" error={errors.message?.message} id="message">
        <textarea
          id="message"
          {...register("message")}
          rows={5}
          className="form-input resize-none"
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === "error" && (
        <p className="text-sm text-red-400" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center h-11 px-8 text-[13px] font-medium tracking-wide uppercase bg-accent text-void rounded-sm transition-all hover:bg-accent-deep hover:shadow-[0_0_24px_var(--color-accent-dim)] active:scale-[0.98] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  optional,
  id,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm text-silver">
        {label}
        {optional && <span className="text-stone/60 ml-1.5">(optional)</span>}
      </label>
      <div className="[&_.form-input]:w-full [&_.form-input]:bg-deep [&_.form-input]:border [&_.form-input]:border-white/[0.08] [&_.form-input]:rounded-md [&_.form-input]:px-4 [&_.form-input]:py-3 [&_.form-input]:text-sm [&_.form-input]:text-white [&_.form-input]:placeholder:text-stone/40 [&_.form-input]:focus:outline-none [&_.form-input]:focus:border-accent/40 [&_.form-input]:focus:ring-1 [&_.form-input]:focus:ring-accent/20 [&_.form-input]:transition-colors [&_.form-input]:aria-[invalid=true]:border-red-500/50">
        {children}
      </div>
      {error && (
        <p className="text-xs text-red-400" role="alert">{error}</p>
      )}
    </div>
  );
}
