import React, { useState, useEffect } from "react"; 
import SongList from "../components/List/SongList";


function ApiGetSongs() {
  const [page] = useState(1);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://winc-playlist-mark.firebaseio.com/songs.json")
      .then(res => res.json())

      .then(result => {
        let songs = Object.keys(result).map(key => ({
          id: key,
          title: result[key].title,
          artist: result[key].artist,
          genre: result[key].genre,
          rating: result[key].rating
        }));
        return songs;
      })

      .then(response => {
        setSongs(response);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [page]);

  return (
    <div>
      {isLoading && <p>Loading Songs</p>}
      <SongList songs={songs}/>
    </div>
  );
}

export default ApiGetSongs
