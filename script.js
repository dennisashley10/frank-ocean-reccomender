const ALBUMS = {
  channel_orange: { cover: "./channel-orange.jpg.png" },
  blonde: { cover: "./blonde.jpg.png" }
};

// Apple Music SONG links (direct to song page)
const SONG_LINKS = {
  // Channel Orange
  "Thinkin Bout You": "https://music.apple.com/us/song/thinkin-bout-you/441423661",
  "Bad Religion": "https://music.apple.com/us/song/bad-religion/441423660",
  "Forrest Gump": "https://music.apple.com/us/song/forrest-gump/441423666",
  "Pilot Jones": "https://music.apple.com/us/song/pilot-jones/441423657",
  "End": "https://music.apple.com/us/song/end/441423667",

  "Lost": "https://music.apple.com/us/song/lost/441423662",
  "Sweet Life": "https://music.apple.com/us/song/sweet-life/441423658",
  "Monks": "https://music.apple.com/us/song/monks/441423665",
  "Fertilizer": "https://music.apple.com/us/song/fertilizer/441423654",

  "Pink Matter": "https://music.apple.com/us/song/pink-matter/441423655",
  "Sierra Leone": "https://music.apple.com/us/song/sierra-leone/441423656",
  "Crack Rock": "https://music.apple.com/us/song/crack-rock/441423659",
  "Super Rich Kids": "https://music.apple.com/us/song/supper-rich-kids/441423653",
  "White": "https://music.apple.com/us/song/white/441423664",

  "Pyramids": "https://music.apple.com/us/song/pyramids/441423663",
  "Not Just Money": "https://music.apple.com/us/song/not-just-money/441423650",
  "Start": "https://music.apple.com/us/song/start/441423649",

  // Blonde
  "Ivy": "https://music.apple.com/us/song/ivy/1146195597",
  "Self Control": "https://music.apple.com/us/song/self-control/1146195596",
  "White Ferrari": "https://music.apple.com/us/song/white-ferrari/1146195599",
  "Godspeed": "https://music.apple.com/us/song/godspeed/1146195603",
  "Close to You": "https://music.apple.com/us/song/close-to-you/1146195600",
  "Good Guy": "https://music.apple.com/us/song/good-guy/1146195601",

  "Pink + White": "https://music.apple.com/us/song/pink-white/1146195592",
  "Nikes": "https://music.apple.com/us/song/nikes/1146195588",
  "Skyline To": "https://music.apple.com/us/song/skyline-to/1146195594",

  "Solo": "https://music.apple.com/us/song/solo/1146195589",
  "Nights": "https://music.apple.com/us/song/nights/1146195593",
  "Facebook Story": "https://music.apple.com/us/song/facebook-story/1146195590",
  "Solo (Reprise)": "https://music.apple.com/us/song/solo-reprise/1146195595",

  "Seigfried": "https://music.apple.com/us/song/seigfried/1146195604",
  "Futura Free": "https://music.apple.com/us/song/futura-free/1146195605",
  "Pretty Sweet": "https://music.apple.com/us/song/pretty-sweet/1146195602",
  "Be Yourself": "https://music.apple.com/us/song/be-yourself/1146195591"
};

const MOODS = {
  sad: {
    label: "Sad",
    channel_orange: ["Thinkin Bout You","Bad Religion","Forrest Gump","Pilot Jones","End"],
    blonde: ["Ivy","Self Control","White Ferrari","Godspeed","Close to You","Good Guy"]
  },
  happy: {
    label: "Happy",
    channel_orange: ["Lost","Sweet Life","Monks","Fertilizer"],
    blonde: ["Pink + White","Nikes","Skyline To"]
  },
  chill: {
    label: "Chill",
    channel_orange: ["Pink Matter","Sierra Leone","Crack Rock","Super Rich Kids","White"],
    blonde: ["Solo","Nights","Facebook Story","Solo (Reprise)"]
  },
  deep: {
    label: "Deep",
    channel_orange: ["Pyramids","Not Just Money","Start"],
    blonde: ["Seigfried","Futura Free","Pretty Sweet","Be Yourself"]
  }
};

function pickRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function recommendMood(key){
  const mood = MOODS[key];
  if (!mood) return;

  document.getElementById("moodName").innerText = mood.label;
  document.getElementById("empty").style.display = "none";
  document.getElementById("grid").style.display = "grid";

  const co = pickRandom(mood.channel_orange);
  const bl = pickRandom(mood.blonde);

  document.getElementById("coverCO").src = ALBUMS.channel_orange.cover;
  document.getElementById("songCO").innerText = co;
  document.getElementById("linkCO").href = SONG_LINKS[co];

  document.getElementById("coverB").src = ALBUMS.blonde.cover;
  document.getElementById("songB").innerText = bl;
  document.getElementById("linkB").href = SONG_LINKS[bl];
}
