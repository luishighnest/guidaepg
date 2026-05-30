/* Base URL per tutti i canali */
const STREAM_BASE = "https://www.chilistream.net/live.php?ch=";

const CHANNELS = [
    // ── DIGITALE TERRESTRE (21) ──
    { id: 1, name: "Rai 1", cat: "digitale", icon: "ph-television", code: "rai1" },
    { id: 2, name: "Rai 2", cat: "digitale", icon: "ph-television", code: "rai2" },
    { id: 3, name: "Rai 3", cat: "digitale", icon: "ph-television", code: "rai3" },
    { id: 4, name: "Rai 4", cat: "digitale", icon: "ph-television", code: "rai4" },
    { id: 5, name: "Rai 5", cat: "digitale", icon: "ph-television", code: "rai5" },
    { id: 6, name: "Rete 4", cat: "digitale", icon: "ph-television", code: "rete4" },
    { id: 7, name: "Canale 5", cat: "digitale", icon: "ph-television", code: "canale5" },
    { id: 8, name: "Italia 1", cat: "digitale", icon: "ph-television", code: "italia1" },
    { id: 9, name: "La7", cat: "digitale", icon: "ph-television", code: "la7" },
    { id: 10, name: "TV8", cat: "digitale", icon: "ph-television", code: "8" },
    { id: 11, name: "Nove", cat: "digitale", icon: "ph-television", code: "nove" },
    { id: 12, name: "20 Mediaset", cat: "digitale", icon: "ph-television", code: "20" },
    { id: 13, name: "Real Time", cat: "digitale", icon: "ph-television", code: "realtime" },
    { id: 14, name: "Boing", cat: "digitale", icon: "ph-television", code: "boing" },
    { id: 15, name: "K2", cat: "digitale", icon: "ph-television", code: "k2" },
    { id: 16, name: "Rai Gulp", cat: "digitale", icon: "ph-television", code: "raigulp" },
    { id: 17, name: "Frisbee", cat: "digitale", icon: "ph-television", code: "frisbee" },
    { id: 18, name: "DMAX", cat: "digitale", icon: "ph-television", code: "dmax" },
    { id: 19, name: "Rai Sport", cat: "digitale", icon: "ph-television", code: "raisport" },
    { id: 20, name: "Sportitalia", cat: "digitale", icon: "ph-television", code: "sportitalia" },

    // ── SPORT (21) ──
    { id: 21, name: "Sky Sport 24", cat: "sport", icon: "ph-soccer-ball", code: "SPORT24" },
    { id: 22, name: "Sky Sport Uno", cat: "sport", icon: "ph-soccer-ball", code: "SPORTUNO" },
    { id: 23, name: "Sky Sport Calcio", cat: "sport", icon: "ph-soccer-ball", code: "sportcalcio" },
    { id: 24, name: "Sky Sport Tennis", cat: "sport", icon: "ph-tennis-ball", code: "sporttennis" },
    { id: 25, name: "Sky Sport F1", cat: "sport", icon: "ph-steering-wheel", code: "sportf1" },
    { id: 26, name: "Sky Sport MotoGP", cat: "sport", icon: "ph-motorcycle", code: "sportmotogp" },
    { id: 27, name: "Sky Sport Basket", cat: "sport", icon: "ph-basketball", code: "sportbasket" },
    { id: 28, name: "Sky Sport Arena", cat: "sport", icon: "ph-trophy", code: "arena" },
    { id: 29, name: "Sky Sport Max", cat: "sport", icon: "ph-fire", code: "max" },
    { id: 30, name: "Sky Sport Mix", cat: "sport", icon: "ph-shuffle", code: "mix" },
    { id: 31, name: "Sky Sport Golf", cat: "sport", icon: "ph-flag", code: "golf" },
    { id: 32, name: "Sky Sport Legend", cat: "sport", icon: "ph-star", code: "legend" },
    { id: 33, name: "Sky Sport 251", cat: "sport", icon: "ph-monitor-play", code: "sport251" },
    { id: 34, name: "Sky Sport 252", cat: "sport", icon: "ph-monitor-play", code: "sport252" },
    { id: 35, name: "Sky Sport 253", cat: "sport", icon: "ph-monitor-play", code: "sport253" },
    { id: 36, name: "Sky Sport 254", cat: "sport", icon: "ph-monitor-play", code: "sport254" },
    { id: 37, name: "Sky Sport 255", cat: "sport", icon: "ph-monitor-play", code: "sport255" },
    { id: 38, name: "Sky Sport 256", cat: "sport", icon: "ph-monitor-play", code: "sport256" },
    { id: 39, name: "Sky Sport 257", cat: "sport", icon: "ph-monitor-play", code: "sport257" },
    { id: 40, name: "Sky Sport 258", cat: "sport", icon: "ph-monitor-play", code: "sport258" },
    { id: 41, name: "Sky Sport 259", cat: "sport", icon: "ph-monitor-play", code: "sport259" },

    // ── DAZN (19) ──
    { id: 42, name: "Serie B", cat: "dazn", icon: "ph-play-circle", code: "bluesport" },
    { id: 43, name: "Dazn 2", cat: "dazn", icon: "ph-play-circle", code: "Dazn2_WARP" },
    { id: 44, name: "Dazn 3", cat: "dazn", icon: "ph-play-circle", code: "Dazn3_WARP" },
    { id: 45, name: "Dazn 4", cat: "dazn", icon: "ph-play-circle", code: "Dazn4_WARP" },
    { id: 46, name: "Dazn 5", cat: "dazn", icon: "ph-play-circle", code: "Dazn5_WARP" },
    { id: 47, name: "Dazn 6", cat: "dazn", icon: "ph-play-circle", code: "dazn10ita" },
    { id: 48, name: "Dazn 7", cat: "dazn", icon: "ph-play-circle", code: "dazn11ita" },
    { id: 49, name: "Eleven Sports 1 PL", cat: "dazn", icon: "ph-play-circle", code: "elevensport1" },
    { id: 50, name: "Eleven Sports 2 PL", cat: "dazn", icon: "ph-play-circle", code: "elevensport2" },
    { id: 51, name: "Eleven Sports 3 PL", cat: "dazn", icon: "ph-play-circle", code: "elevensport3" },
    { id: 52, name: "Eleven Sports 4 PL", cat: "dazn", icon: "ph-play-circle", code: "elevensport4" },
    { id: 53, name: "Sport Tv 1", cat: "dazn", icon: "ph-play-circle", code: "sporttv1" },
    { id: 54, name: "Sport Tv 2", cat: "dazn", icon: "ph-play-circle", code: "sporttv2" },
    { id: 55, name: "Sport Tv 3", cat: "dazn", icon: "ph-play-circle", code: "sporttv3" },
    { id: 56, name: "Sport Tv 4", cat: "dazn", icon: "ph-play-circle", code: "sporttv4" },
    { id: 57, name: "Sport Tv 5", cat: "dazn", icon: "ph-play-circle", code: "sporttv5" },
    { id: 58, name: "Sport Tv 6", cat: "dazn", icon: "ph-play-circle", code: "sporttv6" },
    { id: 59, name: "Sport Tv 7", cat: "dazn", icon: "ph-play-circle", code: "sporttv7" },
    { id: 60, name: "Tnt Sports 1", cat: "dazn", icon: "ph-play-circle", code: "tnt" },

    // ── EUROSPORT (6) ──
    { id: 61, name: "Eurosport 1", cat: "eurosport", icon: "ph-bicycle", code: "eurosport1" },
    { id: 62, name: "Eurosport 2", cat: "eurosport", icon: "ph-bicycle", code: "eurosport2" },
    { id: 63, name: "Eurosport 3", cat: "eurosport", icon: "ph-bicycle", code: "eurosport3" },
    { id: 64, name: "Eurosport 4", cat: "eurosport", icon: "ph-bicycle", code: "eurosport4" },
    { id: 65, name: "Eurosport 5", cat: "eurosport", icon: "ph-bicycle", code: "eurosport5" },
    { id: 66, name: "Eurosport 6", cat: "eurosport", icon: "ph-bicycle", code: "eurosport6" },

    // ── LBA (5) ──
    { id: 67, name: "LBA TV 1", cat: "lba", icon: "ph-basketball", code: "lbatv1" },
    { id: 68, name: "LBA TV 2", cat: "lba", icon: "ph-basketball", code: "lbatv2" },
    { id: 69, name: "LBA TV 3", cat: "lba", icon: "ph-basketball", code: "lbatv3" },
    { id: 70, name: "LBA TV 4", cat: "lba", icon: "ph-basketball", code: "lbatv4" },
    { id: 71, name: "LBA TV 5", cat: "lba", icon: "ph-basketball", code: "lbatv5" },

    // ── ENTERTAINMENT (12) ──
    { id: 72, name: "Sky TG 24", cat: "entertainment", icon: "ph-newspaper", code: "tg24" },
    { id: 73, name: "Sky Uno", cat: "entertainment", icon: "ph-television", code: "skyuno" },
    { id: 74, name: "Sky Atlantic", cat: "entertainment", icon: "ph-globe", code: "atlantic" },
    { id: 75, name: "Sky Serie", cat: "entertainment", icon: "ph-film-slate", code: "serie" },
    { id: 76, name: "Sky Adventure", cat: "entertainment", icon: "ph-mountains", code: "adventure" },
    { id: 77, name: "Sky Arte", cat: "entertainment", icon: "ph-paint-brush", code: "arte" },
    { id: 78, name: "Sky Investigation", cat: "entertainment", icon: "ph-detective", code: "investigation" },
    { id: 79, name: "Sky Crime", cat: "entertainment", icon: "ph-fingerprint", code: "crime" },
    { id: 80, name: "Sky Documentaries", cat: "entertainment", icon: "ph-book-open-text", code: "documentaries" },
    { id: 81, name: "Sky Nature", cat: "entertainment", icon: "ph-tree", code: "nature" },
    { id: 82, name: "MTV", cat: "entertainment", icon: "ph-music-notes", code: "mtv" },
    { id: 83, name: "Comedy Central", cat: "entertainment", icon: "ph-smiley-wink", code: "comedy" },

    // ── CINEMA (8) ──
    { id: 84, name: "Sky Cinema Uno", cat: "cinema", icon: "ph-film-strip", code: "uno" },
    { id: 85, name: "Sky Cinema Suspense", cat: "cinema", icon: "ph-eye", code: "suspense" },
    { id: 86, name: "Sky Cinema Drama", cat: "cinema", icon: "ph-masks-theater", code: "drama" },
    { id: 87, name: "Sky Cinema Action", cat: "cinema", icon: "ph-sword", code: "action" },
    { id: 88, name: "Sky Cinema Comedy", cat: "cinema", icon: "ph-smiley", code: "cinemacomedy" },
    { id: 89, name: "Sky Cinema Romance", cat: "cinema", icon: "ph-heart", code: "cinemaromance" },
    { id: 90, name: "Sky Cinema Family", cat: "cinema", icon: "ph-baby", code: "illumination" },
    { id: 91, name: "Sky Cinema Collection", cat: "cinema", icon: "ph-film-strip", code: "collection" }
];

const CATEGORIES = {
    all: { label: "Tutti i Canali", icon: "ph-squares-four", color: "#FFFF00" },
    digitale: { label: "Digitale Terrestre", icon: "ph-television", color: "#4CAF50" },
    sport: { label: "Sport", icon: "ph-soccer-ball", color: "#00E676" },
    dazn: { label: "DAZN", icon: "ph-play-circle", color: "#F5F507" },
    eurosport: { label: "Eurosport", icon: "ph-bicycle", color: "#2196F3" },
    lba: { label: "LBA TV", icon: "ph-basketball", color: "#FF9800" },
    entertainment: { label: "Intrattenimento", icon: "ph-popcorn", color: "#FF7043" },
    cinema: { label: "Cinema", icon: "ph-film-strip", color: "#E040FB" }
};

function getChannelsByCategory(cat) {
    if (cat === "all") return CHANNELS;
    return CHANNELS.filter(c => c.cat === cat);
}
function getChannelById(id) {
    return CHANNELS.find(c => c.id === parseInt(id));
}
function getStreamUrl(channel) {
    if (!channel || !channel.code) return "";
    return STREAM_BASE + channel.code;
}
