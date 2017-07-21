import React, {Component} from 'react';
import http from 'http';
import axios from "axios";
import InfoBox from "../components/InfoBox";

class NorgePlussContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            norgeno: ''
        }
    }

    fetchFromServer() {
        axios.get("http://localhost:8080/data/fastlege").then( (response) => {
            console.log(response);
            this.setState({norgeno: response.data})
        })
    }

    componentWillMount() {
        this.fetchFromServer();
        this.setState({
            norgeno: ''
        });
    }

    render() {
        return (
            <div>
                <InfoBox/>
                <InfoBox/>
                <InfoBox/>
            </div>
        );
    }
}

export default NorgePlussContainer;