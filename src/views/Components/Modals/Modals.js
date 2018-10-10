
import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBlock,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from "reactstrap";
import axios from "axios";

class Models extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res:''
    };
    this.getCategories()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }

 getCategories(){
   var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    axios
      .get("https://mcmall.herokuapp.com/api/users/getCategories", {
        headers: headers
      })
      .then(response => {
        this.setState({res:response.data})
        console.log(response.data,'res')
        
      })
      .catch(error => {
        console.log(error);
      });
 }

 handleSubmit(){
   event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type":"application/json"
    };
    console.log(this.state)
   
    var data = {
      name: this.state.category_name,
    };
    axios.post("https://mcmall.herokuapp.com/api/users/createCategory", data, {
        headers: headers
      })
      .then(response => {
        console.log(response,'res');
      })
      .catch(error => {
        console.log(error);
      });
 }
 
 handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
 }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" style={{'float': 'none', 'margin': '0 auto'}}>
            <Card>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Add Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="text"
                          id="category_name"
                          name="category_name"
                          value={this.state.category_name}
                          onChange={this.handleChange}
                          placeholder="Mall Name"
                        />
                      </Col>
                      </FormGroup>
                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}} onClick={this.handleSubmit}>
                    <i className="fa fa-dot-circle-o"/> Add
                  </Button>
                </CardFooter>
              </Card>
                <Card style={{'marginTop':'10%'}}>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Add Sub Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                   <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="addSubCat">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="editCat" id="editCat">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Sub Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="text"
                          id="text-input"
                          name="text-input"
                          placeholder="Mall Name"
                        />
                      </Col>
                      </FormGroup>

                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}}>
                    <i className="fa fa-dot-circle-o" /> Add
                  </Button>
                </CardFooter>
              </Card>
                <Card style={{'marginTop':'10%'}}>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Edit Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                   <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="editCat">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="editCat" id="editCat">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Edit Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="text"
                          id="text-input"
                          name="text-input"
                          placeholder="Mall Name"
                        />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}}>
                    <i className="fa fa-dot-circle-o" /> Save
                  </Button>
                </CardFooter>
              </Card>
                  <Card>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Add Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          type="text"
                          id="text-input"
                          name="text-input"
                          placeholder="Mall Name"
                        />
                      </Col>
                      </FormGroup>
                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}}>
                    <i className="fa fa-dot-circle-o"/> Add
                  </Button>
                </CardFooter>
              </Card>
                  <Card>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Delete Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="delCat">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="delCat" id="delCat">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}}>
                    <i className="fa fa-dot-circle-o"/> Delete
                  </Button>
                </CardFooter>
              </Card>
                 <Card>
                <CardHeader>
                  <strong  style={{'float': 'none', 'margin': '0 auto'}}>Delete Sub Category</strong>
                </CardHeader>
                <CardBlock className="card-body">
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="delsubCatCategory">Category Name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="delsubCatCategory" id="delsubCatCategory">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Input>
                      </Col>
                    </FormGroup>
                     <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="delsubCatSubCategory">Sub Category Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="select" name="delsubCatSubCategory" id="delsubCatSubCategory">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </Input>
                        </Col>
                      </FormGroup>
                  </Form>
                </CardBlock>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"  style={{'float': 'none', 'margin': '0 auto'}}>
                    <i className="fa fa-dot-circle-o"/> Delete
                  </Button>
                </CardFooter>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Models;