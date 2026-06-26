import ContactForm from "@/components/contact/ContactForm";
import { HiMail, HiSparkles } from "react-icons/hi";

export const metadata = {
  title: "Contact | MasumDev",
  description:
    "Contact Abdullah Masum for cold email outreach, email deliverability, lead generation, and full-stack web development projects.",
};

const ContactPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden py-24">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <section className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
            <HiMail />
            Contact
          </span>

          <h1 className="mt-6 text-4xl font-bold text-[var(--foreground)] md:text-6xl">
            Let&apos;s discuss your project
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            Need help with cold email outreach, email deliverability, lead
            generation, or a full-stack web application? Send me a message and
            I&apos;ll get back to you.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
              <HiSparkles className="text-2xl" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-[var(--foreground)]">
              How I can help
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <p>Cold email outreach system setup</p>
              <p>Email deliverability and inbox placement</p>
              <p>Lead generation and prospect list building</p>
              <p>Instantly, Smartlead, Apollo, HubSpot setup</p>
              <p>Next.js, React, MongoDB web applications</p>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <p className="text-sm leading-7 text-cyan-100">
                Best for B2B companies, agencies, SaaS founders, and business
                owners who need reliable outreach systems or modern web
                applications.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
