const ALBUMS = {
  channel_orange: { cover: "./channel-orange.jpg.png" },
  blonde: { cover: "./blonde.jpg.png" }
};

function pickRandom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function spotifySearch(title){
  return `https://open.spotify.com/search/${encodeURIComponent("Frank Ocean " + title)}`;
}

function embed(url){
  return url.includes("/track/")
    ? url.replace("open.spotify.com/", "open.spotify.com/embed/")
    : "";
}

const MOOD_MAP = {
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

function recommendMood(key){
  const mood = MOOD_MAP[key];
  document.getElementById("moodName").innerText = mood.label;

  const co = pickRandom(mood.channel_orange);
  const bl = pickRandom(mood.blonde);

  document.getElementById("emptyState").style.display="none";
  document.getElementById("twoCol").style.display="grid";

  document.getElementById("coverCO").src = ALBUMS.channel_orange.cover;
  document.getElementById("songCO").innerText = co;
  document.getElementById("linkCO").href = spotifySearch(co);
  document.getElementById("playerCO").src = embed(spotifySearch(co));

  document.getElementById("coverB").src = ALBUMS.blonde.cover;
  document.getElementById("songB").innerText = bl;
  document.getElementById("linkB").href = spotifySearch(bl);
  document.getElementById("playerB").src = embed(spotifySearch(bl));
}
