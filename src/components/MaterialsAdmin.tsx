import React, {Component} from "react";
import { Row, Col, Container } from 'react-bootstrap';
import Homebar from './Homebar';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import MaterialEdit from './MaterialEdit';

type Props = {

}

type Material = {
    _id: String
    priority_name: String

}

type MyState = {
    materials: Array<Material>,
    material_name: string,
    material_parent: String,
    to_edit: Material

}

class MaterialsAdmin extends Component<Props, MyState> {

    state: MyState = {
        materials: [],
        material_name: 'new',
        material_parent: 'new',
        to_edit: {
            _id: "new",
            priority_name: "new"
        }
    }

    constructor(props: Props) {
        super(props);

        this.onClickDelete = this.onClickDelete.bind(this);
        this.goToMaterialEdit = this.goToMaterialEdit.bind(this);
        this.saveMaterial = this.saveMaterial.bind(this);
    }

    handleMaterialNameChange = (event: Event) => {
        this.setState({
            material_name: ""
        })
    }

    handleParentChange = (event: Event) => {
        this.setState({
            material_parent: ""
        })
    }

    componentDidMount() {
        this.fetchMaterials();
    }

    goToMaterialEdit(to_edit: Material) {

        if  (to_edit){
            console.log("editing a material");
        }
        else{
            console.log("new material!")
        }

    }

    saveMaterial(to_edit: Material) {
        if(to_edit){
            console.log("saving to material");
        }
        else {
            console.log("creating new material");
            console.log(this.state);
            this.insertMaterial(this.state.material_name);
        }
    }

    onClickDelete(material_object: Material) {
        console.log(`onClickDelete called for material ${material_object}`);
        console.log(material_object);
    }

    async insertMaterial(priority_name: String) {

        const data = {
            "priority_name": priority_name,
            "parent": parent
        }

        const result = await axios.post(`http://localhost:3030/server/api/v1/materials`, data,
        {
            headers: {
                authorization: 'NEED AUTH TOKEN',
                'Content-type': 'application/json'
            }
        })
    }

    async fetchMaterials() {
        try {
            const materials = await axios.get("http://localhost:3030/server/api/v1/materials",
            {
                headers: {
                    'content-type': 'application/json'
                }
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                console.error(err);
                return [];
            });

            this.setState({materials})
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        console.log(this.state.materials);
        return (
            <div>
                {/* TODO!!!! the below gotomaterialedit only operates on the first material */}
                <h2>Materials <Button variant="primary" onClick={() => this.goToMaterialEdit(this.state.materials[0])}>Create</Button>{' '}</h2>

                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>List of materials card</Card.Title>
                                <Card.Text>Material 1, Material 2</Card.Text>
                                <ListGroup>

                                {this.state.materials?.map(material => {
                                    return(
                                        <div>
                                            <ListGroup.Item>
                                            <Row>
                                                <Col>{material._id}</Col>
                                                <Col><a href={"/materials/" + material._id}>{material.priority_name}</a></Col>
                                                <Col><Button variant="danger" onClick={() => this.onClickDelete(material)}>Delete</Button>{' '}</Col>
                                                <Col><Button variant="secondary" onClick={() => this.goToMaterialEdit(material)}>Edit</Button> </Col>
                                            </Row>
                                            </ListGroup.Item>
                                        </div>
                                    )
                                })}
                                
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Edit material card</Card.Title>
                                <Card.Text>Field A, Field B</Card.Text>
                                <Form>
                                    <Form.Group controlId="formGroupName">
                                        <Form.Label>Material Name</Form.Label>
                                        <Form.Control type="text" placeholder="Material Name" value={this.state.material_name} onChange={() => this.handleMaterialNameChange} />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupParent">
                                        <Form.Label>Parent Material</Form.Label>
                                        <Form.Control type="text" placeholder="Parent Material (optional)" />
                                    </Form.Group>
                                </Form>
                                <Button variant="primary" onClick={() => this.saveMaterial(this.state.to_edit)}>Create</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                

            </div>
        )
    }
}

export default MaterialsAdmin;