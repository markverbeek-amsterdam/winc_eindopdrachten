import React from "react";
import ListItem from "./ListItem";

class SongList extends React.Component {

  render() {
    
    const listItems = this.props.songs.map(item => (
          <ListItem  item={item} 
          />

        
        ));
    return (
      <React.Fragment>
          <div className="songlist">
        {listItems}</div>
      </React.Fragment>
    );
  }
}

export default SongList;
