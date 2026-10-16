import React, { useState } from 'react';
import { SparkleStar } from './illustrations/DecorativeElements';
import {
  Mail,
  Send,
  Check,
  Copy,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const verifiedEmail = 'swalihakausarkhan.24102007@gmail.com';
  const linkedInUrl =
    'https://www.linkedin.com/in/swaliha-kausar-khan-5b5458422/?isSelfProfile=false';

  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedDispatch, setSubmittedDispatch] = useState<FormState | null>(null);
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Email format validation regex
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!validateEmail(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = validate();
    if (validationErrors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate deliberate validation processing settling within 300ms
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedDispatch({ ...formData });
    }, 300);
  };

  const handleCopy = () => {
    if (!submittedDispatch) return;
    const formatted = `From: ${submittedDispatch.name} (${submittedDispatch.email})
Subject: ${submittedDispatch.subject}
----------------------------------------
${submittedDispatch.message}`;

    navigator.clipboard.writeText(formatted).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(verifiedEmail).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const handleMailto = () => {
    if (!submittedDispatch) return;
    const subjectEncoded = encodeURIComponent(submittedDispatch.subject);
    const bodyEncoded = encodeURIComponent(
      `Hello Swaliha,\n\n${submittedDispatch.message}\n\n--\nSent by ${submittedDispatch.name} (${submittedDispatch.email})`
    );
    window.location.href = `mailto:${verifiedEmail}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleReset = () => {
    setSubmittedDispatch(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setCopied(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EBDD] border-t-3 border-[#211A1B]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b-3 border-[#211A1B]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#651D32] text-[#FBF7F0] px-2.5 py-1 brutal-shadow-sm">
                05 / DISPATCH
              </span>
              <SparkleStar size={16} color="#651D32" />
            </div>
            <h2 className="font-serif font-black text-3xl sm:text-5xl text-[#211A1B] tracking-tight">
              Let&apos;s Connect.
            </h2>
          </div>
          <span className="font-mono text-xs text-[#211A1B]/75 uppercase tracking-wider">
            CONVERSATIONS &amp; IDEAS
          </span>
        </div>

        {/* Master Oxblood Neo-Brutalist Panel */}
        <div className="bg-[#651D32] text-[#FBF7F0] brutal-border-4 brutal-shadow-xl p-6 sm:p-10 md:p-14 relative overflow-hidden">
          {/* Subtle Halftone texture on Oxblood */}
          <div className="absolute inset-0 opacity-10 bg-halftone pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (5 cols): Editorial Prompt & Direct Verified Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D7B46A] text-[#211A1B] font-mono text-xs font-bold uppercase tracking-wider brutal-border brutal-shadow-sm">
                <span>OPEN FOR DIALOGUE</span>
              </div>

              <h3 className="font-serif font-black text-3xl sm:text-4xl text-[#FBF7F0] leading-tight">
                Have an idea? Let&apos;s make something meaningful.
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#FBF7F0]/90 leading-relaxed">
                I&apos;m always interested in learning, exchanging ideas, and connecting with people
                who enjoy solving problems through technology. Reach out directly or use the dispatch
                composer.
              </p>

              {/* Direct Verified Contact Channels: Email & LinkedIn */}
              <div className="space-y-3 pt-1">
                <span className="block font-mono text-[11px] font-bold tracking-widest text-[#D7B46A] uppercase">
                  DIRECT CONTACT CHANNELS
                </span>

                {/* 1. Verified Email Card */}
                <div className="bg-[#FBF7F0] text-[#211A1B] brutal-border brutal-shadow-sm p-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#211A1B] transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#651D32] uppercase">
                      <Mail className="w-4 h-4 text-[#651D32] shrink-0" />
                      <span>Direct Email</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="font-mono text-[10px] text-[#211A1B]/70 hover:text-[#651D32] flex items-center gap-1 uppercase bg-[#F4EBDD] px-2 py-0.5 brutal-border"
                      title="Copy email to clipboard"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3 h-3 text-[#651D32]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${verifiedEmail}`}
                    className="block font-mono text-xs sm:text-sm font-bold text-[#211A1B] hover:text-[#651D32] transition-colors break-all mt-2 underline decoration-2 decoration-[#D7B46A] hover:decoration-[#651D32]"
                  >
                    {verifiedEmail}
                  </a>

                  <div className="mt-2.5 pt-2 border-t border-[#211A1B]/15 flex items-center justify-between text-[11px] font-sans text-[#211A1B]/75">
                    <span>Click to open in your mail app</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#651D32]" />
                  </div>
                </div>

                {/* 2. Verified LinkedIn Card */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#D7B46A] text-[#211A1B] brutal-border brutal-shadow-sm p-4 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#211A1B] transition-all group"
                  aria-label="Connect with Swaliha Kausar Khan on LinkedIn (opens in new tab)"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-[#211A1B] text-[#FBF7F0] brutal-border flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4 text-[#FBF7F0]" />
                      </div>
                      <div>
                        <span className="block font-mono text-[10px] font-bold text-[#211A1B]/70 uppercase tracking-wider">
                          PROFESSIONAL NETWORK
                        </span>
                        <span className="font-sans font-black text-sm text-[#211A1B] group-hover:text-[#651D32] transition-colors">
                          Connect on LinkedIn
                        </span>
                      </div>
                    </div>
                    <div className="w-7 h-7 bg-[#FBF7F0] text-[#211A1B] brutal-border flex items-center justify-center group-hover:bg-[#651D32] group-hover:text-[#FBF7F0] transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Verified Information Notice */}
              <div className="p-4 bg-[#211A1B] brutal-border text-xs font-sans text-[#FBF7F0]/85 space-y-2">
                <div className="flex items-center gap-2 text-[#D7B46A] font-mono font-bold uppercase">
                  <AlertCircle className="w-4 h-4" />
                  <span>TRANSPARENCY NOTICE</span>
                </div>
                <p>
                  This personal portfolio is self-hosted on client infrastructure. The email and
                  LinkedIn channels above provide direct contact. Messages composed below are
                  validated and prepared for immediate dispatch via your preferred mail client.
                </p>
              </div>

              {/* Monogram Seal */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D7B46A] text-[#211A1B] brutal-border flex items-center justify-center font-serif font-black text-lg">
                  SK
                </div>
                <div>
                  <p className="font-serif font-bold text-sm text-[#FBF7F0]">Swaliha Kausar Khan</p>
                  <p className="font-mono text-xs text-[#D7B46A]">Aspiring AI/ML Learner &amp; Student Programmer</p>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Functional Form / Dispatch Box */}
            <div className="lg:col-span-7 bg-[#FBF7F0] text-[#211A1B] brutal-border brutal-shadow-lg p-6 sm:p-8">
              {!submittedDispatch ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between border-b-2 border-[#211A1B] pb-3 mb-2">
                    <span className="font-mono text-xs font-bold text-[#651D32] uppercase tracking-wider">
                      DISPATCH COMPOSER
                    </span>
                    <span className="font-mono text-[11px] text-[#211A1B]/60 uppercase">
                      ALL FIELDS REQUIRED
                    </span>
                  </div>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-name"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#211A1B]"
                    >
                      Your Name <span className="text-[#651D32]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-3.5 py-2.5 bg-[#F4EBDD] brutal-border text-sm font-sans text-[#211A1B] placeholder-[#211A1B]/40 focus:bg-[#FBF7F0] transition-colors ${
                        errors.name ? 'border-[#651D32] ring-1 ring-[#651D32]' : ''
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs font-mono font-bold text-[#651D32] mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-email"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#211A1B]"
                    >
                      Email Address <span className="text-[#651D32]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. eleanor@domain.com"
                      className={`w-full px-3.5 py-2.5 bg-[#F4EBDD] brutal-border text-sm font-sans text-[#211A1B] placeholder-[#211A1B]/40 focus:bg-[#FBF7F0] transition-colors ${
                        errors.email ? 'border-[#651D32] ring-1 ring-[#651D32]' : ''
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs font-mono font-bold text-[#651D32] mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="contact-subject"
                      className="block font-sans font-bold text-xs uppercase tracking-wider text-[#211A1B]"
                    >
                      Subject <span className="text-[#651D32]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="e.g. Exploring AI concepts / Collaboration"
                      className={`w-full px-3.5 py-2.5 bg-[#F4EBDD] brutal-border text-sm font-sans text-[#211A1B] placeholder-[#211A1B]/40 focus:bg-[#FBF7F0] transition-colors ${
                        errors.subject ? 'border-[#651D32] ring-1 ring-[#651D32]' : ''
                      }`}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      required
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs font-mono font-bold text-[#651D32] mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-message"
                        className="block font-sans font-bold text-xs uppercase tracking-wider text-[#211A1B]"
                      >
                        Message <span className="text-[#651D32]">*</span>
                      </label>
                      <span className="font-mono text-[10px] text-[#211A1B]/60">
                        {formData.message.length} CHARS
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Share your thoughts, recommended study paths, or project ideas..."
                      className={`w-full px-3.5 py-2.5 bg-[#F4EBDD] brutal-border text-sm font-sans text-[#211A1B] placeholder-[#211A1B]/40 focus:bg-[#FBF7F0] transition-colors resize-y ${
                        errors.message ? 'border-[#651D32] ring-1 ring-[#651D32]' : ''
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs font-mono font-bold text-[#651D32] mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full brutal-btn py-3 px-6 bg-[#651D32] text-[#FBF7F0] font-sans font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#211A1B] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-[#D7B46A]" />
                          <span>Validating Dispatch...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#D7B46A]" />
                          <span>Prepare Message Dispatch</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Honest Dispatch Prepared State */
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#651D32] uppercase border-b-2 border-[#211A1B] pb-3">
                    <Check className="w-4 h-4 text-[#651D32]" />
                    <span>DISPATCH PREPARED &amp; VALIDATED</span>
                  </div>

                  <div className="p-4 bg-[#F4EBDD] brutal-border space-y-3">
                    <p className="font-sans text-xs text-[#211A1B] font-medium leading-relaxed">
                      Your message format has been checked and verified. Because live mail delivery
                      requires an external configured mail relay, you can now launch your desktop
                      mail client (prefilled to Swaliha) or copy the formatted text directly:
                    </p>

                    <div className="p-3 bg-[#FBF7F0] brutal-border font-mono text-xs text-[#211A1B] space-y-1">
                      <p>
                        <strong>To:</strong> {verifiedEmail}
                      </p>
                      <p>
                        <strong>From:</strong> {submittedDispatch.name} ({submittedDispatch.email})
                      </p>
                      <p>
                        <strong>Subject:</strong> {submittedDispatch.subject}
                      </p>
                      <p className="pt-1 border-t border-[#211A1B]/20 text-[#211A1B]/90 line-clamp-3">
                        {submittedDispatch.message}
                      </p>
                    </div>
                  </div>

                  {/* Working Alternative Actions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleMailto}
                      className="brutal-btn py-2.5 px-4 bg-[#651D32] text-[#FBF7F0] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#211A1B]"
                    >
                      <ExternalLink className="w-4 h-4 text-[#D7B46A]" />
                      <span>Open Mail Client</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopy}
                      className="brutal-btn py-2.5 px-4 bg-[#211A1B] text-[#FBF7F0] font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#D7B46A] hover:text-[#211A1B]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#D7B46A]" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-mono font-bold text-[#651D32] hover:underline uppercase block text-center w-full pt-1"
                  >
                    ← Edit or Compose Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Closing Footer with Direct Links */}
        <footer className="pt-8 pb-4 border-t-3 border-[#211A1B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#211A1B]/80">
          <div className="flex items-center gap-2 font-bold">
            <span className="w-2.5 h-2.5 bg-[#651D32] inline-block" />
            <span>Designed with intention. Built while learning.</span>
          </div>

          {/* Direct Verified Links in Footer */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${verifiedEmail}`}
              className="hover:text-[#651D32] font-mono text-xs flex items-center gap-1.5 underline underline-offset-4 decoration-[#D7B46A]"
              title="Send email to Swaliha"
            >
              <Mail className="w-3.5 h-3.5 text-[#651D32]" />
              <span>{verifiedEmail}</span>
            </a>
            <span className="text-[#211A1B]/40">·</span>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#651D32] font-mono text-xs flex items-center gap-1.5 underline underline-offset-4 decoration-[#D7B46A]"
              title="Visit Swaliha's LinkedIn profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#651D32]" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-[#211A1B]/60" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span>&copy; {new Date().getFullYear()} Swaliha Kausar Khan</span>
            <span>·</span>
            <span>Bodoni Moda &amp; DM Sans</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
