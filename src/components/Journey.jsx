import React from "react";
import { motion } from "motion/react";
import eduIcon from "../pics/journey-edu.png";
import internIcon from "../pics/journey-intern.png";
import devIcon from "../pics/journey-dev.png";

const journeyData = [
  {
    period: "Sept 2025 – Present",
    role: "Software Developer",
    organization: "Herkings Corporation",
    badgeColor: "bg-tertiary",
    accentColor: "text-tertiary",
    dotColor: "bg-tertiary",
    bulletColor: "bg-tertiary",
    bullets: [
      <>
        Joined Herkings Corporation as a full-time Software Developer following
        successful completion of the internship.
      </>,
      <>
        Develop and maintain{" "}
        <strong className="font-semibold text-gray-900">
          full-stack web and mobile applications
        </strong>{" "}
        using modern development frameworks and technologies.
      </>,
      <>
        Expanded technical expertise by integrating applications with{" "}
        <strong className="font-semibold text-gray-900">
          hardware components
        </strong>
        , including NFC card readers and QR/barcode scanners.
      </>,
      <>
        Contributed to the development of{" "}
        <strong className="font-semibold text-gray-900">
          POS, loyalty, membership, CRM, inventory, and business management
          systems
        </strong>
        .
      </>,
      <>
        Implemented and integrated features across{" "}
        <strong className="font-semibold text-gray-900">
          web, mobile, backend, database, and cloud infrastructure
        </strong>
        .
      </>,
      <>
        Deploy, test, troubleshoot, and maintain applications in{" "}
        <strong className="font-semibold text-gray-900">
          production environments using AWS
        </strong>
        .
      </>,
      <>
        Present completed systems and new features directly to{" "}
        <strong className="font-semibold text-gray-900">
          clients and stakeholders
        </strong>
        , gathering feedback and translating business requirements into
        technical solutions.
      </>,
    ],
    icon: devIcon,
    iconAlt: "Software Development Station 3D Icon",
  },
  {
    period: "July 2025 – Sept 2025",
    role: "Full-Stack Developer Intern",
    organization: "Herkings Corporation",
    badgeColor: "bg-accent",
    accentColor: "text-accent",
    dotColor: "bg-accent",
    bulletColor: "bg-accent",
    bullets: [
      <>
        Developed{" "}
        <strong className="font-semibold text-gray-900">
          Sari-Sari Events
        </strong>{" "}
        and <strong className="font-semibold text-gray-900">Forekas CRM</strong>
        , contributing to both frontend and backend development.
      </>,
      <>
        Designed and implemented{" "}
        <strong className="font-semibold text-gray-900">
          database schemas
        </strong>{" "}
        to support application requirements and data relationships.
      </>,
      <>
        Gained hands-on experience deploying and managing applications using{" "}
        <strong className="font-semibold text-gray-900">
          AWS cloud services
        </strong>
        .
      </>,
      <>
        Worked within a professional development environment, applying software
        engineering practices to real-world projects.
      </>,
    ],
    icon: internIcon,
    iconAlt: "Cloud Database 3D Icon",
  },
  {
    period: "Aug 2022 – Sept 2026",
    role: "Bachelor of Science in Computer Science",
    organization: "Cavite State University – Bacoor Campus",
    badgeColor: "bg-tertiary",
    accentColor: "text-tertiary",
    dotColor: "bg-tertiary",
    bulletColor: "bg-tertiary",
    bullets: [
      <>
        Consistently recognized as a{" "}
        <strong className="font-semibold text-gray-900">
          Vice President’s Lister
        </strong>{" "}
        for academic excellence.
      </>,
      <>
        Served as the{" "}
        <strong className="font-semibold text-gray-900">
          main programmer and developer for the undergraduate thesis
        </strong>
        , leading the implementation of the system’s core functionalities.
      </>,
      <>
        Applied software development principles in building, testing, and
        integrating full-stack applications.
      </>,
    ],
    icon: eduIcon,
    iconAlt: "Education & CS 3D Icon",
  },
];

function Journey() {
  return (
    <section
      id="journey"
      className="flex flex-col w-full items-center justify-center py-30 bg-primary"
    >
      <div className="flex flex-col w-[92%] max-w-6xl items-center justify-center">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <p className="text-tertiary font-mono tracking-widest text-sm uppercase mb-2">
            JOURNEY
          </p>
          <h2 className="text-3xl md:text-5xl font-normal text-gray-900">
            Experience & Education
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Timeline Center Line (desktop: centered, mobile: left-aligned) */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 w-[2px] -translate-x-1/2 bg-gray-200" />

          <div className="flex flex-col gap-12 md:gap-20 w-full">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0; // Even: Card Left, Icon Right (desktop). Odd: Icon Left, Card Right (desktop)

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-stretch md:items-center w-full"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full ${item.dotColor} -translate-x-1/2 z-10 shadow-md ring-4 ring-primary`}
                  />

                  {/* Desktop Layout: 2 Columns */}
                  {/* Left Column */}
                  <div className="pl-10 md:pl-0 md:w-1/2 md:pr-12 flex justify-end">
                    {isEven ? (
                      /* Card on the left */
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full bg-white/90 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300"
                      >
                        <span
                          className={`inline-block font-mono text-xs font-medium tracking-wider uppercase px-0 py-0 mb-3 ${item.accentColor}`}
                        >
                          {item.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl text-gray-900 mb-1 leading-tight">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs md:text-sm text-darkgray mb-5 tracking-wide">
                          {item.organization}
                        </p>
                        <ul className="space-y-1 font-google text-sm md:text-[15px] text-gray-500 leading-tight">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${item.bulletColor} mt-2 shrink-0`}
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      /* Icon on the left (Hidden on mobile) */
                      <div className="hidden md:flex w-full items-center justify-center pr-6">
                        <motion.div
                          initial={{ scale: 0.3, opacity: 0, rotate: -8 }}
                          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 14,
                            mass: 0.8,
                          }}
                          whileHover={{ scale: 1.06, rotate: 2 }}
                          className="w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center p-2 cursor-pointer filter drop-shadow-xl"
                        >
                          <img
                            src={item.icon}
                            alt={item.iconAlt}
                            className="max-w-full max-h-full object-contain rounded-2xl"
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="pl-10 md:pl-12 md:w-1/2 flex justify-start">
                    {!isEven ? (
                      /* Card on the right */
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full bg-white/90 backdrop-blur-sm border border-gray-100/80 rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300"
                      >
                        <span
                          className={`inline-block font-mono text-xs font-medium tracking-wider uppercase px-0 py-0 mb-3 ${item.accentColor}`}
                        >
                          {item.period}
                        </span>
                        <h3 className="text-2xl md:text-3xl text-gray-900 mb-1 leading-tight">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs md:text-sm text-darkgray mb-5 tracking-wide">
                          {item.organization}
                        </p>
                        <ul className="space-y-3 font-google text-sm md:text-[15px] text-gray-600 leading-relaxed">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${item.bulletColor} mt-2 shrink-0`}
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      /* Icon on the right (Hidden on mobile) */
                      <div className="hidden md:flex w-full items-center justify-center pl-6">
                        <motion.div
                          initial={{ scale: 0.3, opacity: 0, rotate: 8 }}
                          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 14,
                            mass: 0.8,
                          }}
                          whileHover={{ scale: 1.06, rotate: -2 }}
                          className="w-56 h-56 lg:w-64 lg:h-64 flex items-center justify-center p-2 cursor-pointer filter drop-shadow-xl"
                        >
                          <img
                            src={item.icon}
                            alt={item.iconAlt}
                            className="max-w-full max-h-full object-contain rounded-2xl"
                          />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
