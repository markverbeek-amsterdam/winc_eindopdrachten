import React from 'react';

import SongList from "./components/List/SongList";
import ApiGetSongs from "./API/ApiGetSongs";
import AddNewSong from './components/AddNewSong';




class SongOverview extends React.Component {
  
    constructor() {
      super()
      this.state = {
        songs: []
      }
    }

    addSong = (props) => {
      console.log('from overview', props)

       const requestBody=(props)

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestBody)
        };
        fetch("https://winc-playlist-mark.firebaseio.com/songs.json", requestOptions)
        .then(async response =>{
            const data = await response.json();
        
            if(!response.ok) {
                const error = (data && data.messsage) || response.status;
                return Promise.reject(error);
            }
 
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

        const newSong = (props);

        this.setState({ songs : [...this.state.songs, newSong ]});


    }

    render() {
      return (
        <div>
                  <AddNewSong addSong={this.addSong} />
                  <SongList songs={this.state.songs}/>
                  <ApiGetSongs/>
        </div>
      );
    }
  }
  
  export default SongOverview;