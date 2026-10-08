"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";

export function ContactRequest() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (!form.reportValidity()) return;
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/xbloezzn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fields.get("name"),
          email: fields.get("email"),
          phone: "",
          message: `Setting: ${fields.get("setting")}\n\n${fields.get("message")}`,
          consentGiven: fields.get("consent") === "on",
          timestamp: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="sp-contact-form"
      ref={formRef}
      onSubmit={submit}
      action="https://formspree.io/f/xbloezzn"
      method="POST"
    >
      <div className="sp-form-row">
        <div className="sp-field">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
          />
        </div>
        <div className="sp-field">
          <label htmlFor="contact-email">Work email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="sp-field">
        <label htmlFor="contact-setting">What brings you here?</label>
        <select
          id="contact-setting"
          name="setting"
          defaultValue="Oncology care"
        >
          <option>Oncology care</option>
          <option>Professional sport</option>
          <option>Research or partnership</option>
        </select>
      </div>
      <div className="sp-field">
        <label htmlFor="contact-message">What would you like to explore?</label>
        <textarea
          id="contact-message"
          name="message"
          rows={3}
          required
          maxLength={2000}
          placeholder="Tell us about your programme, team or research."
        />
      </div>
      <p className="sp-form-hint">
        Please keep personal health information out of this form.
      </p>
      <label className="sp-consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree to the processing of my details to respond to this request, as
          described in the <Link href="/privacy-policy">privacy policy</Link>.
        </span>
      </label>
      <details className="sp-contact-privacy">
        <summary>How your details are used</summary>
        <p>
          The controller is Fundación Privada Instituto de Salud Global
          Barcelona (ISGlobal), CIF G65341695, C/ Rosselló 132, 7th floor, 08036
          Barcelona. Your consent allows us to process your contact details
          solely to respond to your enquiry. The website uses Formspree Inc., a
          processor located in the United States, to deliver the submission.
          Under the existing contact policy, data are retained while your
          consent remains in place. You may withdraw consent at any time without
          affecting earlier lawful processing, and request access, correction,
          erasure, portability or restriction by contacting{" "}
          <a href="mailto:lopd@isglobal.org">lopd@isglobal.org</a>. You may also
          complain to the{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spanish Data Protection Agency
          </a>
          . Read the <Link href="/privacy-policy">privacy policy</Link> for more
          information.
        </p>
      </details>
      <button
        className="sp-button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending request…" : "Request a demo"}
        <ArrowUpRight size={18} aria-hidden />
      </button>
      <div
        className={`sp-form-status sp-form-status-${status}`}
        role="status"
        aria-live="polite"
      >
        {status === "success" && (
          <>
            <CheckCircle size={20} aria-hidden />
            <span>
              Thank you. Your request has been sent to the SciencePeaks team.
            </span>
          </>
        )}
        {status === "error" && (
          <>
            <WarningCircle size={20} aria-hidden />
            <span>Your request could not be sent. Please try again.</span>
          </>
        )}
      </div>
    </form>
  );
}
