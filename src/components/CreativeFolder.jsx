import React, { useEffect, useMemo, useState } from "react";
import { IoMdGrid, IoIosList } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";
import imageData from "../assets/data/vangoatFolder";

const tabs = [
  { id: "All" },
  { id: "Drawings" },
  { id: "Guitar" },
];

function CreativeFolder({ setShowFolder }) {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const viewModes = useMemo(() => [
    { id: "grid", icon: <IoMdGrid /> },
    { id: "list", icon: <IoIosList /> },
  ], []);

  const activeItems = useMemo(
    () => imageData[selectedTab] || imageData.All,
    [selectedTab]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowFolder(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [setShowFolder]);

  return (
    <div
      className="absolute inset-0 z-100 flex h-screen w-full items-end md:items-center justify-center bg-black/20 sm:p-4 backdrop-blur-sm"
      onClick={() => setShowFolder(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onAnimationComplete={() => setIsReady(true)}
        style={{ willChange: "transform, opacity" }}
        className="flex h-[70dvh] w-full md:max-w-3xl flex-col overflow-hidden rounded-xl border border-darkgray/20 bg-white font-mono shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* MENU */}
        <div className="flex flex-row items-center justify-between border-b border-darkgray/30 p-4">
          <ul>
            <li className="flex items-center gap-2 [&>button]:h-3.5 [&>button]:w-3.5 [&>button]:rounded-full [&>button]:cursor-pointer">
              <button
                type="button"
                onClick={() => setShowFolder(false)}
                aria-label="Close"
                className="flex items-center justify-center bg-[#ff5f57] text-[10px] font-bold leading-none text-transparent transition-colors hover:text-[#7c1814]"
              >
                x
              </button>
              <button
                type="button"
                aria-label="Minimize"
                className="bg-[#febc2e]"
              />
              <button
                type="button"
                aria-label="Maximize"
                className="bg-[#28c840]"
              />
            </li>
          </ul>

          <p className="text-darkgray text-xs md:text-sm">vangoat/</p>

          <div className="flex items-center gap-[3px] text-darkgray [&>button]:cursor-pointer [&>button]:transition-colors">
            {viewModes.map((mode) => (
              <button
                key={mode.id}
                type="button"
                aria-label={
                  mode.id === "grid"
                    ? "Switch to Grid View"
                    : "Switch to List View"
                }
                className={`p-1 rounded-md ${viewMode === mode.id ? "bg-gray-200 text-gray-600" : "hover:bg-gray-100 text-darkgray/70"}`}
                onClick={() => setViewMode(mode.id)}
              >
                {mode.icon}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-42 border-r border-darkgray/20 bg-gray-50 px-4 py-5 md:block">
            <p className="mb-3 px-1 text-[11px] tracking-[0.08em] text-darkgray/70 uppercase font-medium">
              Favorites
            </p>
            <ul className="space-y-1.5">
              {tabs.map((tab) => {
                const isActive = tab.id === selectedTab;
                return (
                  <li key={`sidebar-${tab.id}`}>
                    <button
                      type="button"
                      aria-label={`View ${tab.id} folder`}
                      onClick={() => setSelectedTab(tab.id)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                        isActive
                          ? "bg-accent text-white"
                          : "text-darkgray/80 hover:bg-black/5"
                      }`}
                    >
                      {tab.id}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-2 overflow-x-auto border-b border-darkgray/15 px-3 py-2 md:hidden">
              {tabs.map((tab) => {
                const isActive = tab.id === selectedTab;
                return (
                  <motion.button
                    key={tab.id}
                    initial={false}
                    animate={{
                      backgroundColor: isActive ? "#F4991A" : "#00000000",
                      color: isActive ? "#ffffff" : "#6e6e6e",
                    }}
                    type="button"
                    aria-label={`View ${tab.id} folder`}
                    className="rounded-full px-4 py-1.5 text-xs font-medium whitespace-nowrap"
                    onClick={() => setSelectedTab(tab.id)}
                  >
                    {tab.id}
                  </motion.button>
                );
              })}
            </div>

            <div className={`min-h-0 flex-1 overflow-y-auto font-mono ${viewMode === "grid" ? "p-4" : "px-4 pt-4"}`}>
              {!isReady ? (
                <div className="flex h-full items-center justify-center text-sm text-darkgray/50">
                  Loading files...
                </div>
              ) : activeItems.length === 0 ? (
                <div className="grid h-full place-items-center rounded-lg border border-dashed border-darkgray/25 bg-white/50 p-6 text-center text-sm text-darkgray/70">
                  No files yet in this folder.
                </div>
              ) : viewMode === "grid" ? (
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {activeItems.map((item) => (
                    <article key={item.id} className="space-y-1.5" style={{ contentVisibility: 'auto', containIntrinsicSize: '150px' }}>
                      <div
                      onClick={() => setSelectedItem(item)}
                    className="aspect-[16/9] overflow-hidden rounded-xl cursor-pointer border border-black/10 bg-black/10 shadow-sm">
                        <img
                          src={item.thumb || item.src}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                        />
                      </div>
                      <p className="line-clamp-1 px-1 text-center text-xs text-darkgray/90">
                        {item.title}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {activeItems.map((item) => (
                    <li
                      key={`list-${item.id}`}
                      onClick={() => setSelectedItem(item)}
                      style={{ contentVisibility: 'auto', containIntrinsicSize: '70px' }}
                      className="flex items-center gap-3 rounded-lg p-2 border-b border-darkgray/10 cursor-pointer hover:bg-black/3"
                    >
                      <img
                        src={item.thumb || item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="h-14 w-24 rounded-md border border-black/10 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm text-darkgray/90">{item.title}</p>
                        <p className="text-[11px] text-darkgray/65">{item.category}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-darkgray/15 px-3 py-2 text-[11px] text-darkgray/65">
              <p>
                {activeItems.length} {activeItems.length === 1 ? "item" : "items"}
              </p>              
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <div 
              className="relative max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[90vh] w-auto object-contain rounded-lg border border-darkgray/25 shadow-lg"
              />
              <button
                onClick={() => {
                    setSelectedItem(null);
                }}
                className="absolute top-3 right-3 cursor-pointer flex h-6 w-6 items-center justify-center rounded-full bg-black/50 text-white"
              >
                ✕
              </button>

              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
              <div className="absolute bottom-5 left-8 font-mono">
                <p className="text-center text-sm text-white">{selectedItem.title}</p>
                <p className="text-center text-xs text-gray-300">{selectedItem.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CreativeFolder;
