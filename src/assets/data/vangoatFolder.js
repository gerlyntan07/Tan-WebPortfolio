const imageModules = import.meta.glob("../artworks/*.{png,jpg,jpeg,webp,gif,avif}", {
    eager: true,
    import: "default",
});

const thumbnailModules = import.meta.glob("../artworks/*.{png,jpg,jpeg,webp,gif,avif}", {
    eager: true,
    import: "default",
    query: { w: '400', format: 'webp' }
});

const cleanFileName = (path) => {
    const fullName = path.split("/").pop() || "untitled";
    return fullName.replace(/\.[^/.]+$/, "");
};

const toTitleCase = (value) =>
    value
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());

const inferCategory = (path) => {
    if (/\.(gif|webm|mp4)$/i.test(path)) {
        return "Motion";
    }

    return "Drawings";
};

const allItems = Object.entries(imageModules)
    .map(([path, src], index) => {
        const fileName = cleanFileName(path);
        return {
            id: `${fileName}-${index}`,
            title: toTitleCase(fileName),
            src,
            thumb: thumbnailModules[path] || src,
            category: inferCategory(path),
        };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

const files = {
    All: allItems,
    Drawings: allItems.filter((item) => item.category === "Drawings"),
    Guitar: allItems.filter((item) => item.category === "Guitar"),
};

export default files;