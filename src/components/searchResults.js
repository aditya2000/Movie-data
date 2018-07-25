import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

import {Col, Row} from 'reactstrap';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const res = this.props.results;
        return(
            <div>
            <Row>
            {this.props.results.map( (result) => {
                return (<Col sm="4" key={result.id}>
                        <Card style={{marginTop:'1em'}} >
                            <CardBody>
                                <CardTitle>{result.title}</CardTitle>
                                <CardSubtitle>{result.tagline}</CardSubtitle>
                                <CardImg width="auto" src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt='Poster'/>
                                <CardText>Release Date: {result.release_date}</CardText>
                                <CardText>{result.status}</CardText>
                            </CardBody>
                        </Card>
                        </Col>
                        )
            }
            )
            }
            </Row>
            </div>
        );
    }
}

export default SearchResults;