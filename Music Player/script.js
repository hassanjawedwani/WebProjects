import { allSongs } from "./songs.js";

const playlistSongs = document.querySelector(".playlist-songs");

const userData = {
  songs: [...allSongs],
};

function renderSongs() {
  console.log(allSongs);
  userData.songs.map((song) => {
    const HTMLString = `
      <li>
        <button>
          <span>${song.title}</span>
          <span>${song.artist}</span>
          <span>${song.duration}</span>
        </button><button>
                 
        </button>
      </li>
    `;
    playlistSongs.innerHTML += HTMLString;
  });
}

document.onload = renderSongs();
