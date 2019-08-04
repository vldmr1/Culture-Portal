import React, {Component} from "react"
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "gatsby"

import "./search_module.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.locale = props.locale;
        this.state = {
            autors:  props.autorsList.map(function(item){
                console.log(item[props.locale])
                return {
                    id: item.id,
                    name: item[props.locale]
                }
            }),
            autorsFilter: props.autorsList.map(function(item){
                return {
                    id: item.id,
                    name: item[props.locale]
                }
            }),
        }
        this.searchFilter = this.searchFilter.bind(this);
    }

    searchFilter(e){
        this.setState({
            autorsFilter: this.state.autors.filter((autor) => {
                const str = autor.name.toLowerCase();
                const val = e.target.value.toLowerCase();
                return str.indexOf(val) !== -1 ? true : false
            } )
        });
    }

    render() {
      return (
        <Container className={"search"}>
            <Row>
                <Col>
                    <input className={"search__input"} type="text" placeholder="search" onChange={this.searchFilter}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className={"search__name-list"}>
                        {this.state.autorsFilter.map((item, num) => (<li key={num}><Link to={`/${item.id}`}>{item.name}</Link></li>))}
                    </ul>
                </Col>
            </Row>
        </Container>
      );
    }
  }

  export default Search;