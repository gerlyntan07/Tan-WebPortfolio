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

// Add this to the bottom of vangoatFolder.js
const guitarCovers = [
  {
    id: "guitar-1",
    title: "Dilaw - Uhaw",
    videoUrl: "https://www.youtube.com/embed/i3mY1twS0i8?si=gAZ4giqFx08kujHl",
    thumb: "https://img.youtube.com/vi/i3mY1twS0i8/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-2",
    title: "Twice - Crazy Stupid Love",
    videoUrl: "https://www.youtube.com/embed/zEs_0EwyWpk?si=G43b83z_mfbXNhaZ",
    thumb: "https://img.youtube.com/vi/zEs_0EwyWpk/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-3",
    title: "Childish Gambino - Redbone Intro",
    videoUrl: "https://www.youtube.com/embed/J58hmPiK9BM?si=GPKqQ1fOlJrztfTS",
    thumb: "https://img.youtube.com/vi/J58hmPiK9BM/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-4",
    title: "Lady Gaga, Bruno Mars - Die With A Smile",
    videoUrl: "https://www.youtube.com/embed/uiG-0HWCeBQ?si=YOoCk45QotZOdVHW",
    thumb: "https://img.youtube.com/vi/uiG-0HWCeBQ/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-5",
    title: "Soapdish - Tensionado",
    videoUrl: "https://www.youtube.com/embed/L1yo7Y4Q1QM?si=s_RqcE7RZ55PF5tS",
    thumb: "https://img.youtube.com/vi/L1yo7Y4Q1QM/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-6",
    title: "Rose & Bruno Mars - APT",
    videoUrl: "https://www.youtube.com/embed/DvtlA3cSZzE?si=st9Xa-jCbt0K6a69",
    thumb: "https://img.youtube.com/vi/DvtlA3cSZzE/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-7",
    title: "HYBS - Ride",
    videoUrl: "https://www.youtube.com/embed/mlP_lR2l06Y?si=Ro5YvFuou9I291q6",
    thumb: "https://img.youtube.com/vi/mlP_lR2l06Y/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-8",
    title: "Rex Orange Country - Sunflower",
    videoUrl: "https://www.youtube.com/embed/yyZkR5ucduA?si=u-RjHpBGS4luO_ky",
    thumb: "https://img.youtube.com/vi/yyZkR5ucduA/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-9",
    title: "Twice - Blame It On Me",
    videoUrl: "https://www.youtube.com/embed/Uh8DLqIftRY?si=H_09XTFNTET942sd",
    thumb: "https://img.youtube.com/vi/Uh8DLqIftRY/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-10",
    title: "Olivia Rodrigo - good 4 u",
    videoUrl: "https://www.youtube.com/embed/2bH1ChjqtRE?si=mR2dS5o2QI6OqoEN",
    thumb: "https://img.youtube.com/vi/2bH1ChjqtRE/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-11",
    title: "Juan Karlos - ERE",
    videoUrl: "https://www.youtube.com/embed/mBip9IqqcV0?si=5Qwgxf0XzCQFI0ap",
    thumb: "https://img.youtube.com/vi/mBip9IqqcV0/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-12",
    title: "Maroon 5 - This Love",
    videoUrl: "https://www.youtube.com/embed/l6Ol1x532Fw?si=ymz_QnE1QL843s_A",
    thumb: "https://img.youtube.com/vi/l6Ol1x532Fw/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-13",
    title: "wave to earth - light",
    videoUrl: "https://www.youtube.com/embed/cUGDVleMWMg?si=K1XxLh9WFw93MuNJ",
    thumb: "https://img.youtube.com/vi/cUGDVleMWMg/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-14",
    title: "IV of Spades - Nanaman",
    videoUrl: "https://www.youtube.com/embed/rV7buaSaQtU?si=h7RdiUtrLPdV3cCt",
    thumb: "https://img.youtube.com/vi/rV7buaSaQtU/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-15",
    title: "Earl Agustin - Tibok",
    videoUrl: "https://www.youtube.com/embed/-il11828mgY?si=vuwvGm2kWru58U16",
    thumb: "https://img.youtube.com/vi/-il11828mgY/maxresdefault.jpg",
    category: "Guitar",
  },{
    id: "guitar-16",
    title: "Ariana Grande - Dangerous Woman",
    videoUrl: "https://www.youtube.com/embed/HwOqZMnJwq4?si=uCdREyZt03F7JoGc",
    thumb: "https://img.youtube.com/vi/HwOqZMnJwq4/maxresdefault.jpg",
    category: "Guitar",
  },
];

const guitarSorted = guitarCovers.sort((a, b) => a.title.localeCompare(b.title));

const combinedItems = [...allItems, ...guitarSorted].sort((a, b) => 
  a.title.localeCompare(b.title)
);

const files = {
    All: combinedItems,
    Drawings: allItems.filter((item) => item.category === "Drawings"),
    Guitar: guitarSorted,
};

export default files;