import React from "react";


class AddNewSong extends React.Component{
    constructor(){
        super()
        this.state ={
            title:"",
            artist:"",
            genre:"",
            rating:"",
        }
       
        this.onInput = this.onInput.bind(this)
    }

         onInput(event) {
            const {name, value} = event.target
            this.setState({
                [name]: value
            });
        };

     

render(){
    

    const onSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.addSong(this.state);
        this.setState({ title:"",
        artist:"",
        genre:"",
        rating:""});
        
       

        };
    

    return(
        <form onSubmit={onSubmit}>
            <div className="songs">
                
            <div>
            <input
            placeholder="Title"
            type="search"
            onChange={this.onInput}
            value={this.state.title}
            name="title"
            ></input>

            </div>

            <div>   <input
            placeholder="Artist"
            type="search"
            onChange={this.onInput}
            value={this.state.artist}
            name="artist"
            ></input></div>

            <div>   <input
            placeholder="Genre"
            type="search"
            onChange={this.onInput}
            value={this.state.genre}
            name="genre"
            ></input></div>

            <div> <input
            placeholder="Rating"
            type="search"
            onChange={this.onInput}
            value={this.state.rating}
            name="rating"
            ></input></div>

            <div><button type="submit">Add</button></div>

             
            


            </div>
           
        </form>
    )

}

}

export default AddNewSong;