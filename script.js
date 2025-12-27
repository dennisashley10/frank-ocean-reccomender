const ALBUMS = {
  channel_orange: { cover: "./channel-orange.jpg.png" },
  blonde: { cover: "./blonde.jpg.png" }
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

function appleMusicLink(songTitle){
  // Search URL: always Apple Music
  return `https://music.apple.com/us/search?term=${encodeURIComponent("Frank Ocean " + songTitle)}`;
}

function recommendMood(key){
  const mood = MOODS[key];
  if (!mood) return;

  document.getElementById("moodName").innerText = mood.label;

  const co = pickRandom(mood.channel_orange);
  const bl = pickRandom(mood.blonde);

  document.getElementById("empty").style.display = "none";
  document.getElementById("grid").style.display = "grid";

  // Channel Orange
  document.getElementById("coverCO").src = ALBUMS.channel_orange.cover;
  document.getElementById("songCO").innerText = co;
  document.getElementById("linkCO").href = appleMusicLink(co);

  // Blonde
  document.getElementById("coverB").src = ALBUMS.blonde.cover;
  document.getElementById("songB").innerText = bl;
  document.getElementById("linkB").href = appleMusicLink(bl);
}
