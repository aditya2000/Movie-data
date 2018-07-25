import React, {Component} from 'react';
import { Form, FormGroup, InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import SearchResults from './searchResults';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=f8dbc3fa220fe0ad5d3c07efe576a5fb&language=en-US&query=${this.state.value}&page=1&include_adult=false`)
        .then((res) => {
                return res.json();
            })
        .then((data) => {
            console.log(data);
            this.setState({results: data.results});
        })
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <InputGroup size="lg" style={{width: '50%', marginLeft: '20em', marginTop: '5em'}}>
                            <Input onChange={this.handleChange} value={this.state.value}/>
                            <InputGroupAddon addonType='append'>
                                <Button>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    {this.state.value!==''&&<SearchResults results={this.state.results}/>}
                </Form>
            </div>
        )
    }
}

export default SearchBar;