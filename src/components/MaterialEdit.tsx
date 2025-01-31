import React, {Component} from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import Title from './Title';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

type Props = {
    material_name: String
};


class MaterialEdit extends Component<Props> {

    constructor(props: Props) {
        super(props);

    }

    componentDidMount() {
        this.fetchMaterialData();
    }

    async fetchMaterialData() {
        try {
            const material = await axios.get("http://localhost:3030/server/api/v1/materials/65baed1634d8c7503bc35184",
            {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                console.error(err);
                return null;
            });

            this.setState({material})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <Title name={this.props.material_name}/>

            </div>
        );
    }

}

export default MaterialEdit;