import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

import {Col, Row} from 'reactstrap';
import {Link, Route} from 'react-router-dom';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const res = this.props.results;
        const {match} = this.props;
        return(
            <div>
            <Row>
            {this.props.results.map( (result) => {
                return (<Col xs="4" key={result.id}>
                        <Card>
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
            )
            }
            </Row>
            </div>
        );
    }
}

export default SearchResults;