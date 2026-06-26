"use client";

import { useState } from "react";
import {
  HiArrowRight,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";

const ContactForm = () => {
  const [status, setStatus] = useState({
    loading: false,
    message: "",
    success: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    setStatus({ loading: true, message: "", success: false });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.get("name"),
          email: formData.get("email"),
          subject:
            formData.get("subject") || "New message from MasumDev website",
          message: formData.get("message"),
          from_name: "MasumDev Portfolio",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          message: "Message sent successfully.",
          success: true,
        });
        form.reset();
      } else {
        setStatus({
          loading: false,
          message: data.message || "Message failed. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: "Something went wrong. Please try again.",
        success: false,
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="mt-5 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Tell me about your project..."
        required
        className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-400"
      />

      <button
        type="submit"
        disabled={status.loading}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status.loading ? "Sending..." : "Send Message"}
        {!status.loading && <HiArrowRight className="text-lg" />}
      </button>

      {status.message && (
        <p
          className={`mt-5 flex items-center gap-2 text-sm font-medium ${
            status.success ? "text-cyan-400" : "text-red-400"
          }`}
        >
          {status.success ? <HiCheckCircle /> : <HiExclamationCircle />}
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
