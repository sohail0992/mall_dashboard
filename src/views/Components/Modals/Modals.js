
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

class Models extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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