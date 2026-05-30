/* Base URL per tutti i canali */
const STREAM_BASE = "https://123456.sk";

const CHANNELS = [
    // ── DIGITALE TERRESTRE ──
    { id: 1, name: "Rai 1", cat: "digitale", icon: "ph-television", code: "rai-1" },
    { id: 2, name: "Rai 2", cat: "digitale", icon: "ph-television", code: "rai-2" },
    { id: 3, name: "Rai 3", cat: "digitale", icon: "ph-television", code: "rai-3" },
    { id: 4, name: "Rai 4", cat: "digitale", icon: "ph-television", code: "rai-4" },
    { id: 5, name: "Rai 5", cat: "digitale", icon: "ph-television", code: "rai-5" },
    { id: 6, name: "Rete 4", cat: "digitale", icon: "ph-television", code: "rete-4" },
    { id: 7, name: "Canale 5", cat: "digitale", icon: "ph-television", code: "canale-5" },
    { id: 8, name: "Italia 1", cat: "digitale", icon: "ph-television", code: "italia-uno" },
    { id: 9, name: "La7", cat: "digitale", icon: "ph-television", code: "la7" },
    { id: 10, name: "TV8", cat: "digitale", icon: "ph-television", code: "tv8" },
    { id: 11, name: "Nove", cat: "digitale", icon: "ph-television", code: "nove" },
    { id: 12, name: "20 Mediaset", cat: "digitale", icon: "ph-television", code: "canale-20" },
    { id: 13, name: "Twentyseven", cat: "digitale", icon: "ph-television", code: "mediaset-27" },
    { id: 14, name: "IRIS", cat: "digitale", icon: "ph-television", code: "iris" },
    { id: 15, name: "Rai Movie", cat: "digitale", icon: "ph-television", code: "rai-movie" },
    { id: 16, name: "Rai Premium", cat: "digitale", icon: "ph-television", code: "rai-Premium" },
    { id: 17, name: "La 5", cat: "digitale", icon: "ph-television", code: "la-5" },
    { id: 18, name: "Real Time", cat: "digitale", icon: "ph-television", code: "real-time" },
    { id: 19, name: "Food Network", cat: "digitale", icon: "ph-television", code: "food-network" },
    { id: 20, name: "Focus", cat: "digitale", icon: "ph-television", code: "focus" },
    { id: 21, name: "Giallo", cat: "digitale", icon: "ph-television", code: "giallo" },
    { id: 22, name: "Boing", cat: "digitale", icon: "ph-television", code: "boing" },
    { id: 23, name: "K2", cat: "digitale", icon: "ph-television", code: "k2" },
    { id: 24, name: "Rai Gulp", cat: "digitale", icon: "ph-television", code: "rai-gulp" },
    { id: 25, name: "Frisbee", cat: "digitale", icon: "ph-television", code: "frisbee" },
    { id: 26, name: "DMAX", cat: "digitale", icon: "ph-television", code: "dmax" },
    { id: 27, name: "Rai Sport", cat: "digitale", icon: "ph-television", code: "rai-sport" },
    { id: 28, name: "Sportitalia", cat: "digitale", icon: "ph-television", code: "sportitalia" },
    { id: 29, name: "HGTV", cat: "digitale", icon: "ph-television", code: "home-and-garden-tv" },
    { id: 30, name: "RSI LA 1", cat: "digitale", icon: "ph-television", code: "rsi-la1" },
    { id: 31, name: "RSI LA 2", cat: "digitale", icon: "ph-television", code: "rsi-la2" },

    // ── SPORT ──
    { id: 32, name: "DAZN 1", cat: "sport", icon: "ph-soccer-ball", code: "zona-dazn" },
    { id: 33, name: "Sky Sport 24", cat: "sport", icon: "ph-soccer-ball", code: "sky-sport-24" },
    { id: 34, name: "Sky Sport Uno", cat: "sport", icon: "ph-soccer-ball", code: "sky-sport-uno" },
    { id: 35, name: "Sky Sport Calcio", cat: "sport", icon: "ph-soccer-ball", code: "sky-sport-calcio" },
    { id: 36, name: "Sky Sport Tennis", cat: "sport", icon: "ph-tennis-ball", code: "sky-sport-tennis" },
    { id: 37, name: "Sky Sport F1", cat: "sport", icon: "ph-steering-wheel", code: "sky-sport-f1" },
    { id: 38, name: "Sky Sport Legend", cat: "sport", icon: "ph-star", code: "sky-sport-legend" },
    { id: 39, name: "Sky Sport MotoGP", cat: "sport", icon: "ph-motorcycle", code: "sky-sport-motogp" },
    { id: 40, name: "Sky Sport Basket", cat: "sport", icon: "ph-basketball", code: "sky-sport-basket" },
    { id: 41, name: "Sky Sport Arena", cat: "sport", icon: "ph-trophy", code: "sky-sport-arena" },
    { id: 42, name: "Sky Sport Max", cat: "sport", icon: "ph-fire", code: "sky-sport-max" },
    { id: 43, name: "Sky Sport Mix", cat: "sport", icon: "ph-shuffle", code: "sky-sport-mix" },
    { id: 44, name: "Sky Sport Golf", cat: "sport", icon: "ph-flag", code: "sky-sport-golf" },
    { id: 45, name: "Sky Sport 251", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-1" },
    { id: 46, name: "Sky Sport 252", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-2" },
    { id: 47, name: "Sky Sport 253", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-3" },
    { id: 48, name: "Sky Sport 254", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-4" },
    { id: 49, name: "Sky Sport 255", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-5" },
    { id: 50, name: "Sky Sport 256", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-6" },
    { id: 51, name: "Sky Sport 257", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-7" },
    { id: 52, name: "Sky Sport 258", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-8" },
    { id: 53, name: "Sky Sport 259", cat: "sport", icon: "ph-monitor-play", code: "sky-sport-hd-9" },

    // ── CINEMA ──
    { id: 54, name: "Sky Cinema Uno", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-uno" },
    { id: 55, name: "Sky Cinema Uno +24", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-uno-+24-hd" },
    { id: 56, name: "Sky Cinema Due", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-due" },
    { id: 57, name: "Sky Cinema Due +24", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-due-+24-hd" },
    { id: 58, name: "Sky Cinema Collection", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-collection" },
    { id: 59, name: "Sky Cinema Stories", cat: "cinema", icon: "ph-film-strip", code: "sky-cinema-stories" },
    { id: 60, name: "Sky Cinema Family", cat: "cinema", icon: "ph-baby", code: "sky-cinema-family" },
    { id: 61, name: "Sky Cinema Action", cat: "cinema", icon: "ph-sword", code: "sky-cinema-action" },
    { id: 62, name: "Sky Cinema Suspense", cat: "cinema", icon: "ph-eye", code: "sky-cinema-suspense" },
    { id: 63, name: "Sky Cinema Romance", cat: "cinema", icon: "ph-heart", code: "sky-cinema-romance" },
    { id: 64, name: "Sky Cinema Drama", cat: "cinema", icon: "ph-masks-theater", code: "sky-cinema-drama" },
    { id: 65, name: "Sky Cinema Comedy", cat: "cinema", icon: "ph-smiley", code: "sky-cinema-comedy" },

    // ── INTRATTENIMENTO ──
    { id: 66, name: "Sky Uno", cat: "entertainment", icon: "ph-television", code: "sky-uno" },
    { id: 67, name: "Sky Uno +1", cat: "entertainment", icon: "ph-television", code: "sky-uno-+1-hd" },
    { id: 68, name: "Sky Atlantic", cat: "entertainment", icon: "ph-globe", code: "sky-atlantic" },
    { id: 69, name: "Sky Serie", cat: "entertainment", icon: "ph-film-slate", code: "sky-serie" },
    { id: 70, name: "Sky Investigation", cat: "entertainment", icon: "ph-detective", code: "sky-investigation" },
    { id: 71, name: "Sky Crime", cat: "entertainment", icon: "ph-fingerprint", code: "sky-crime" },
    { id: 72, name: "Sky Adventure", cat: "entertainment", icon: "ph-mountains", code: "sky-adventure" },
    { id: 73, name: "MTV", cat: "entertainment", icon: "ph-music-notes", code: "mtv" },
    { id: 74, name: "Comedy Central", cat: "entertainment", icon: "ph-smiley-wink", code: "comedy-central" },

    // ── DOCUMENTARI ──
    { id: 75, name: "Sky Arte", cat: "documentari", icon: "ph-paint-brush", code: "sky-arte" },
    { id: 76, name: "Sky Documentaries", cat: "documentari", icon: "ph-book-open-text", code: "sky-documentaries" },
    { id: 77, name: "Sky Nature", cat: "documentari", icon: "ph-tree", code: "sky-nature" },
    { id: 78, name: "Discovery Channel", cat: "documentari", icon: "ph-magnifying-glass", code: "discovery-channel" },
    { id: 79, name: "National Geographic", cat: "documentari", icon: "ph-map", code: "national-geographic" },
    { id: 80, name: "History Channel", cat: "documentari", icon: "ph-clock-counter-clockwise", code: "history-channel" },

    // ── NEWS ──
    { id: 81, name: "Sky TG 24", cat: "news", icon: "ph-newspaper", code: "sky-tg24" },
    { id: 82, name: "Sky Meteo 24", cat: "news", icon: "ph-cloud-sun", code: "sky-meteo-24" },
    { id: 83, name: "Rai News 24", cat: "news", icon: "ph-broadcast", code: "rai-news-24" }
];

const CATEGORIES = {
    all: { label: "Tutti i Canali", icon: "ph-squares-four", color: "#FFFF00" },
    digitale: { label: "Digitale Terrestre", icon: "ph-television", color: "#4CAF50" },
    sport: { label: "Sport", icon: "ph-soccer-ball", color: "#00E676" },
    cinema: { label: "Cinema", icon: "ph-film-strip", color: "#E040FB" },
    entertainment: { label: "Intrattenimento", icon: "ph-popcorn", color: "#FF7043" },
    documentari: { label: "Documentari", icon: "ph-book-open-text", color: "#2196F3" },
    news: { label: "News", icon: "ph-newspaper", color: "#FF9800" }
};
