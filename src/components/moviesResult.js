import React, {Component} from  'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import {Col, Row} from 'reactstrap';
import {Link, Route} from 'react-router-dom';

import MovieInfo from './movieInfo';

class MovieResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f8dbc3fa220fe0ad5d3c07efe576a5fb&language=en-US&page=1`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            this.setState({
                results: data.results
            })
        })
    }

    render() {
        const {match} = this.props;
        return(
            <div>
            <Row>
            {this.state.results.map( (result) => {
                return (<Col sm="4" key={result.id}>
                        <Card style={{marginTop:'1em'}} >
                            <CardBody>
                                <CardTitle>{result.title}</CardTitle>
                                <CardSubtitle>{result.tagline}</CardSubtitle>
                                <CardImg width="auto" src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} alt='Poster'/>
                                <CardText>Release Date: {result.release_date}</CardText>
                                <Button color="primary"><Link to={`/${result.id}`} style={{textDecoration: 'none', color: 'white'}}>More</Link></Button>
                            </CardBody>
                        </Card>
                        </Col>
                        )
            }
            )}
            </Row>
            </div>
        );
    }
}

export default MovieResults;