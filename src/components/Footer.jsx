
function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-primary border-t border-black/10">
      <div className="mx-auto flex w-[90%] lg:w-[80%] max-w-6xl flex-col items-center gap-3 py-7 font-mono text-xs text-darkgray md:flex-row md:justify-between">
        <p>© {year} Gerlyn Tan</p>
        <p className="text-center">Made with coffee, graphite and a little guitar.</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="underline underline-offset-4 decoration-black/25 transition-colors hover:text-gray-900 hover:decoration-accent cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

export default Footer;

