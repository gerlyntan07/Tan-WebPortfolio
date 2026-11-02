import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiArrowUpRight, HiLockClosed } from "react-icons/hi2";
import SectionHeading from "./ui/SectionHeading";
import projects, { projectCategories } from "../assets/data/projects";

function FolderIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 20"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        d="M2 3.2C2 2 3 1 4.2 1h4.6c.6 0 1.1.2 1.5.6L12 3.3h7.8C21 3.3 22 4.3 22 5.5V6H2V3.2Z"
        fill="#0EA5E9"
      />
      <rect x="2" y="4.6" width="20" height="14" rx="2.2" fill="#38BDF8" />
    </svg>
  );
}

function ProjectDetail({ project }) {
  const { links } = project;

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col"
    >
      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-darkgray">
        {project.kind} · {project.period}
      </p>
      <h3 className="font-serif text-3xl md:text-4xl text-gray-900 mt-2 leading-tight">
        {project.name}
      </h3>
      <p className="font-google text-[15px] md:text-base text-black/60 leading-relaxed mt-3">
        {project.summary}
      </p>

      <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-darkgray mt-6 mb-2">
        What I handled
      </p>
      <ul className="space-y-1.5 font-google text-sm text-black/65">
        {project.handled.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-1.5 mt-6" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="font-mono text-[11px] text-black/70 rounded-full border border-black/10 bg-primary/60 px-2.5 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2.5 mt-7 font-mono text-sm">
        {links.caseStudy ? (
          <a
            href={links.caseStudy}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-white button-shadow transition-transform active:translate-y-[3px] active:shadow-none"
          >
            Case study <HiArrowUpRight />
          </a>
        ) : (
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-white button-shadow transition-transform active:translate-y-[3px] active:shadow-none"
          >
            Ask me about it <HiArrowUpRight />
          </a>
        )}

        {links.source ? (
          <a
            href={links.source}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-2 text-black/80 transition-colors hover:border-black/30 hover:bg-primary"
          >
            Source code
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-black/15 px-4 py-2 text-xs text-darkgray"
            title="Client work — source code is private"
          >
            <HiLockClosed className="text-[11px]" /> Private repo
          </span>
        )}
      </div>
    </motion.div>
  );
}

function Projects() {
  const [category, setCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(projects[2]?.id ?? projects[0].id);
  const optionRefs = useRef({});

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(category)),
    [category],
  );

  const selected =
    filtered.find((p) => p.id === selectedId) ?? filtered[0] ?? null;

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectCategories.map((c) => [
          c,
          c === "All"
            ? projects.length
            : projects.filter((p) => p.categories.includes(c)).length,
        ]),
      ),
    [],
  );

  const handleCategory = (next) => {
    setCategory(next);
    const nextList =
      next === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(next));
    if (!nextList.some((p) => p.id === selectedId) && nextList[0]) {
      setSelectedId(nextList[0].id);
    }
  };

  const handleListKeyDown = (event) => {
    if (!selected) return;
    const index = filtered.findIndex((p) => p.id === selected.id);
    let nextIndex = index;

    if (event.key === "ArrowDown") nextIndex = Math.min(index + 1, filtered.length - 1);
    else if (event.key === "ArrowUp") nextIndex = Math.max(index - 1, 0);
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = filtered.length - 1;
    else return;

    event.preventDefault();
    const next = filtered[nextIndex];
    setSelectedId(next.id);
    optionRefs.current[next.id]?.focus();
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-primary py-28 md:py-36"
    >
      <div className="absolute inset-0 pointer-events-none bg-grid-lines" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, rgba(244,153,26,0.16), transparent 38%), radial-gradient(circle at 10% 90%, rgba(56,82,180,0.06), transparent 36%)",
        }}
      />

      <div className="relative mx-auto w-[90%] lg:w-[80%] max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I’ve built and shipped"
          description="Production systems from my time at Herkings Corporation, plus my thesis. Pick one to see the stack and what I handled."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mt-12 md:mt-14 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_40px_80px_-40px_rgba(52,79,31,0.35),0_2px_6px_rgba(0,0,0,0.04)]"
        >
          {/* Title bar */}
          <div className="relative flex items-center border-b border-black/8 bg-gradient-to-b from-white to-gray-50/80 px-4 py-3">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <p className="absolute left-1/2 -translate-x-1/2 font-mono text-xs md:text-sm text-darkgray truncate max-w-[60%]">
              projects/
              {category !== "All" && (
                <span className="text-black/40">{category.toLowerCase()}/</span>
              )}
              {selected && (
                <span className="hidden sm:inline text-black/70">{selected.id}</span>
              )}
            </p>
          </div>

          {/* Mobile category chips */}
          <div className="flex gap-2 overflow-x-auto border-b border-black/8 px-3 py-2.5 md:hidden">
            {projectCategories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCategory(c)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 font-mono text-xs whitespace-nowrap transition-colors ${
                    active ? "bg-accent text-white" : "text-darkgray hover:bg-black/5"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-[170px_minmax(0,1fr)_minmax(0,1.25fr)] md:min-h-[440px]">
            {/* Sidebar */}
            <aside className="hidden md:block border-r border-black/8 bg-gray-50/60 px-3 py-5">
              <p className="mb-3 px-2 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-darkgray/80">
                Favorites
              </p>
              <ul className="space-y-1 font-mono text-[13px]">
                {projectCategories.map((c) => {
                  const active = c === category;
                  return (
                    <li key={c}>
                      <button
                        type="button"
                        onClick={() => handleCategory(c)}
                        aria-pressed={active}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors cursor-pointer ${
                          active
                            ? "bg-accent text-white shadow-sm"
                            : "text-darkgray hover:bg-black/5"
                        }`}
                      >
                        {c}
                        <span
                          className={`text-[11px] ${active ? "text-white/80" : "text-darkgray/60"}`}
                        >
                          {counts[c]}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            {/* File list */}
            <div className="border-b md:border-b-0 md:border-r border-black/8 p-3">
              <ul
                role="listbox"
                aria-label="Projects"
                aria-activedescendant={selected ? `project-${selected.id}` : undefined}
                onKeyDown={handleListKeyDown}
                className="space-y-1"
              >
                {filtered.map((project) => {
                  const active = selected?.id === project.id;
                  return (
                    <li key={project.id} className="relative">
                      {active && (
                        <motion.span
                          layoutId="project-active-row"
                          className="absolute inset-0 rounded-xl border-l-[3px] border-accent bg-accent/12"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <button
                        id={`project-${project.id}`}
                        ref={(el) => {
                          optionRefs.current[project.id] = el;
                        }}
                        type="button"
                        role="option"
                        aria-selected={active}
                        tabIndex={active ? 0 : -1}
                        onClick={() => setSelectedId(project.id)}
                        className={`relative flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                          active ? "" : "hover:bg-black/[0.035]"
                        }`}
                      >
                        <FolderIcon className="h-5 w-6" />
                        <span className="flex-1 truncate font-google text-[15px] text-gray-900">
                          {project.name}
                        </span>
                        <span className="font-mono text-[11px] text-darkgray whitespace-nowrap">
                          {project.year}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Detail pane */}
            <div className="p-6 md:p-8 min-h-[380px]">
              <AnimatePresence mode="wait" initial={false}>
                {selected ? (
                  <ProjectDetail project={selected} />
                ) : (
                  <p className="font-mono text-sm text-darkgray">
                    Nothing in this folder yet.
                  </p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-black/8 bg-gray-50/60 px-4 py-2 font-mono text-[11px] text-darkgray">
            <p>
              {filtered.length} {filtered.length === 1 ? "item" : "items"}
            </p>
            <p className="hidden md:flex items-center gap-1.5">
              <kbd className="rounded border border-black/10 bg-white px-1.5">↑</kbd>
              <kbd className="rounded border border-black/10 bg-white px-1.5">↓</kbd>
              to browse
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

