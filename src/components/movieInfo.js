import React, { Component } from 'react';

class MovieInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : {}
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=f8dbc3fa220fe0ad5d3c07efe576a5fb&language=en-US`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            this.setState({
                data: data
            });
        })
    }
    
    render() {
        
        return(
            <div>
                <h2>{this.state.data.title}</h2>
                <h4>{this.state.data.tagline}</h4>
                <img src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}/>
                <p>{this.state.data.overview}</p>
            </div>
        )
    }
}

export default MovieInfo;