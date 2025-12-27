const ALBUMS = {
  channel_orange: { cover: "assets/covers/channel-orange.jpg" },
  blonde: { cover: "assets/covers/blonde.jpg" }
};

function pickRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function spotifySearchLink(title) {
  return `https://open.spotify.com/search/${encodeURIComponent("Frank Ocean " + title)}`;
}

function toEmbed(url){
  if (!url.includes("/track/")) return "";
  return url.replace("open.spotify.com/", "open.spotify.com/embed/");
}

const MOOD_MAP = {
  sad: {
    label: "Sad",
    channel_orange: [
      { title: "Thinkin Bout You", spotify: spotifySearchLink("Thinkin Bout You") },
      { title: "Bad Religion", spotify: spotifySearchLink("Bad Religion") },
      { title: "Forrest Gump", spotify: spotifySearchLink("Forrest Gump") },
      { title: "Pilot Jones", spotify: spotifySearchLink("Pilot Jones") },
      { title: "End", spotify: spotifySearchLink("End") }
    ],
    blonde: [
      { title: "Ivy", spotify: spotifySearchLink("Ivy") },
      { title: "Self Control", spotify: "https://open.spotify.com/track/5GUYJTQap5F3RDQiCOJhrS" },
      { title: "White Ferrari", spotify: spotifySearchLink("White Ferrari") },
      { title: "Godspeed", spotify: spotifySearchLink("Godspeed") },
      { title: "Close to You", spotify: spotifySearchLink("Close to You") },
      { title: "Good Guy", spotify: spotifySearchLink("Good Guy") }
    ]
  },

  happy: {
    label: "Happy",
    channel_orange: [
      { title: "Lost", spotify: spotifySearchLink("Lost") },
      { title: "Sweet Life", spotify: spotifySearchLink("Sweet Life") },
      { title: "Monks", spotify: spotifySearchLink("Monks") },
      { title: "Fertilizer", spotify: spotifySearchLink("Fertilizer") }
    ],
    blonde: [
      { title: "Pink + White", spotify: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8" },
      { title: "Nikes", spotify: "https://open.spotify.com/track/19YKaevk2bce4odJkP5L22" },
      { title: "Skyline To", spotify: spotifySearchLink("Skyline To") }
    ]
  },

  chill: {
    label: "Chill",
    channel_orange: [
      { title: "Pink Matter", spotify: spotifySearchLink("Pink Matter") },
      { title: "Sierra Leone", spotify: spotifySearchLink("Sierra Leone") },
      { title: "Crack Rock", spotify: spotifySearchLink("Crack Rock") },
      { title: "Super Rich Kids", spotify: spotifySearchLink("Super Rich Kids") },
      { title: "White", spotify: spotifySearchLink("White") }
    ],
    blonde: [
      { title: "Solo", spotify: spotifySearchLink("Solo") },
      { title: "Nights", spotify: "https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ" },
      { title: "Facebook Story", spotify: spotifySearchLink("Facebook Story") },
      { title: "Solo (Reprise)", spotify: spotifySearchLink("Solo (Reprise)") }
    ]
  },

  deep: {
    label: "Deep",
    channel_orange: [
      { title: "Pyramids", spotify: "https://open.spotify.com/track/1ZeiI2fQF4V7M7qZt8tUyb" },
      { title: "Not Just Money", spotify: spotifySearchLink("Not Just Money") },
      { title: "Start", spotify: spotifySearchLink("Start") }
    ],
    blonde: [
      { title: "Seigfried", spotify: spotifySearchLink("Seigfried") },
      { title: "Futura Free", spotify: spotifySearchLink("Futura Free") },
      { title: "Pretty Sweet", spotify: spotifySearchLink("Pretty Sweet") },
      { title: "Be Yourself", spotify: spotifySearchLink("Be Yourself") }
    ]
  }
};

function recommendMood(moodKey){
  const mood = MOOD_MAP[moodKey];
  if(!mood){
    alert("Mood not found.");
    return;
  }

  document.getElementById("moodName").innerText = mood.label;

  const co = pickRandom(mood.channel_orange);
  const bl = pickRandom(mood.blonde);

  // Show results area
  document.getElementById("emptyState").style.display = "none";
  document.getElementById("twoCol").style.display = "grid";

  // Channel Orange
  document.getElementById("coverCO").src = ALBUMS.channel_orange.cover;
  document.getElementById("songCO").innerText = co.title;
  document.getElementById("linkCO").href = co.spotify;

  const coEmbed = toEmbed(co.spotify);
  const coPlayer = document.getElementById("playerCO");
  if (coEmbed) { coPlayer.src = coEmbed; coPlayer.style.display = "block"; }
  else { coPlayer.src = ""; coPlayer.style.display = "none"; }

  // Blonde
  document.getElementById("coverB").src = ALBUMS.blonde.cover;
  document.getElementById("songB").innerText = bl.title;
  document.getElementById("linkB").href = bl.spotify;

  const blEmbed = toEmbed(bl.spotify);
  const blPlayer = document.getElementById("playerB");
  if (blEmbed) { blPlayer.src = blEmbed; blPlayer.style.display = "block"; }
  else { blPlayer.src = ""; blPlayer.style.display = "none"; }
}
