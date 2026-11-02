import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HiOutlineSquare2Stack, HiCheck, HiArrowUpRight } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import contact from "../assets/data/contact";

function Postmark() {
  return (
    <div className="relative flex items-center" aria-hidden="true">
      {/* Cancellation waves */}
      <svg
        viewBox="0 0 90 40"
        className="absolute right-[78%] top-1/2 -translate-y-1/2 w-24 text-[#C9773F]/45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        {[8, 16, 24, 32].map((y) => (
          <path
            key={y}
            d={`M0 ${y} q 7.5 -5 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0`}
          />
        ))}
      </svg>
      <div className="relative flex h-[74px] w-[74px] -rotate-12 items-center justify-center rounded-full border-2 border-[#C9773F]/80 text-[#C9773F]">
        <span className="absolute inset-[5px] rounded-full border border-[#C9773F]/40" />
        <span className="text-center font-mono text-[8.5px] leading-[1.25] tracking-[0.12em] uppercase">
          Open
          <br />
          to work
          <br />
          PH
        </span>
      </div>
    </div>
  );
}

function Stamp() {
  return (
    <motion.div
      whileHover={{ rotate: 0, scale: 1.05 }}
      initial={{ rotate: 4 }}
      className="relative h-[82px] w-[66px] shrink-0 border-2 border-dashed border-accent/80 bg-[#FDEFD6] p-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
      aria-hidden="true"
    >
      <div className="flex h-full w-full flex-col items-center justify-between border border-accent/40 py-1">
        <span className="font-mono text-[7px] tracking-widest text-accent/90">PILIPINAS</span>
        <span className="font-serif text-4xl leading-none text-[#B86B12]">G</span>
        <span className="font-mono text-[7px] text-accent/90">₱20</span>
      </div>
    </motion.div>
  );
}

function AddressLine({ href, label, children, external = false }) {
  return (
    <div className="flex items-center gap-2 border-b border-dashed border-black/20 pb-1.5 pt-4">
      <a
        href={href}
        aria-label={label}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        className="group inline-flex min-w-0 items-center gap-1 font-mono text-sm text-gray-900 underline decoration-black/25 underline-offset-4 transition-colors hover:text-tertiary hover:decoration-tertiary"
      >
        <span className="truncate">{children}</span>
        <HiArrowUpRight className="shrink-0 text-xs opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
      </a>
    </div>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-primary pt-28 md:pt-36 pb-24"
    >
      <div className="absolute inset-0 pointer-events-none bg-grid-lines" aria-hidden="true" />

      <div className="relative mx-auto w-[90%] lg:w-[80%] max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk"
          description="Hiring, collaborating or just saying hi? Pick whichever channel suits you."
        />

        {/* Airmail postcard */}
        <motion.article
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          whileHover={{ rotate: 0, y: -4 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="airmail-border mt-12 md:mt-14 rounded-md p-[10px] shadow-[0_40px_70px_-35px_rgba(52,79,31,0.45),0_2px_6px_rgba(0,0,0,0.05)]"
          aria-label="Postcard with contact details"
        >
          <div className="paper-texture grid rounded-[3px] md:grid-cols-2">
            {/* Message side */}
            <div className="p-6 md:p-9 border-b md:border-b-0 md:border-r border-black/10">
              <h3 className="font-serif text-3xl md:text-[40px] leading-tight text-gray-900">
                Greetings from {contact.location}!
              </h3>
              <p className="font-google text-[15px] md:text-base leading-relaxed text-black/65 mt-4">
                I’m a full-stack developer who draws, plays guitar and ships
                software people actually enjoy using.
              </p>
              <p className="font-google text-[15px] md:text-base leading-relaxed text-black/65 mt-3">
                If you’ve got a project, a role or a song request, write back. I
                read every message.
              </p>
              <p className="font-serif italic text-3xl text-gray-900 mt-6 -rotate-2 origin-left">
                {contact.signature}
              </p>
            </div>

            {/* Address side */}
            <div className="relative p-6 md:p-9 flex flex-col">
              <div className="flex items-start justify-end gap-3">
                <Postmark />
                <Stamp />
              </div>

              <div className="mt-6 md:mt-auto">
                <div className="flex items-center gap-2 border-b border-dashed border-black/20 pb-1.5 pt-4">
                  <a
                    href={`mailto:${contact.email}`}
                    className="min-w-0 truncate font-mono text-sm text-gray-900 underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-tertiary"
                  >
                    {contact.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                    className="relative grid h-7 w-7 shrink-0 place-items-center rounded-md text-darkgray transition-colors hover:bg-black/5 hover:text-gray-900 cursor-pointer"
                  >
                    {copied ? <HiCheck className="text-green-600" /> : <HiOutlineSquare2Stack />}
                    <span
                      role="status"
                      className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-0.5 font-mono text-[10px] text-white transition-all ${
                        copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                      }`}
                    >
                      {copied ? "Copied!" : ""}
                    </span>
                  </button>
                </div>
                <AddressLine
                  href={`https://github.com/${contact.github}`}
                  label="GitHub profile"
                  external
                >
                  github.com/{contact.github}
                </AddressLine>
                <AddressLine
                  href={`https://www.linkedin.com/in/${contact.linkedin}`}
                  label="LinkedIn profile"
                  external
                >
                  linkedin.com/in/{contact.linkedin}
                </AddressLine>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Contact;