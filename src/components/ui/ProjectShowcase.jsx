import { useState, useEffect } from "react";
import { HiSparkles } from "react-icons/hi2";
import defaultShowcaseImage from "../../assets/projects/forekas-crm.png";

/**
 * ProjectShowcase:
 * Renders a single showcase image on the very top of the project detail pane.
 * Uses `project.image` if specified; otherwise defaults to `forekas-crm.png`.
 */
function ProjectShowcase({ project, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Active image: use project image, or fall back to default forekas-crm.png
  const imageSrc = !hasError && project.image ? project.image : defaultShowcaseImage;

  // Reset loading & error state when the active project changes
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [project.id, project.image]);

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl border border-black/10 bg-gray-100 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.04)] ${className}`}
    >
      {/* Subtle Inner Highlight Ring */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-xl ring-1 ring-inset ring-black/8"
        aria-hidden="true"
      />     

      {/* Skeleton Shimmer while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-black/5 via-black/10 to-black/5"
          aria-hidden="true"
        />
      )}

      {/* Showcase Image */}
      <img
        key={`${project.id}-${imageSrc}`}
        src={imageSrc}
        alt={project.imageAlt || `${project.name} UI/UX Showcase`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`h-full w-full object-contain object-center transition-all duration-500 ease-out group-hover:scale-[1.025] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ProjectShowcase;
