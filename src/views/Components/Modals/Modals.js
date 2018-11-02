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
      res: "",
      CatofSubCat: "",
      subCatName: "",
      editCatName: "",
      editCat: "",
      deleteCat: "",
      deleteSubCat:"",
      deleteSubCatSub:"",
    };
    this.getCategories();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubCategory = this.handleSubCategory.bind(this);
    this.handleEditCategory = this.handleEditCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }

  getCategories() {
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    axios
      .get("https://mcmall.herokuapp.com/api/users/getCategories", {
        headers: headers
      })
      .then(response => {
        this.setState({ res: response.data });
        console.log(response.data,'cat')
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubCategory(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type": "application/json"
    };
    console.log(this.state);
    var data = {
      name: this.state.subCatName,
      category_id: this.state.CatofSubCat
    };
    axios
      .post("https://mcmall.herokuapp.com/api/users/createSubCategory", data, {
        headers: headers
      })
      .then(response => {
        console.log(response, "res");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDeleteCategory(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type": "application/json"
    };
    console.log(this.state);
    var data = {
      id: this.state.deleteCat
    };
    axios
      .post("https://mcmall.herokuapp.com/api/users/deleteCategory", data, {
        headers: headers
      })
      .then(response => {
        console.log(response, "res");
        this.getCategories()
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleEditCategory(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type": "application/json"
    };
    var data = {
      name: this.state.editCatName,
      id: this.state.editCat
    };
    if (data.id && data.name) {
      axios
        .post("https://mcmall.herokuapp.com/api/users/editCategory", data, {
          headers: headers
        })
        .then(response => {
          console.log(response, "res");
          this.getCategories()
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      console.log("Edit Category value missing");
    }
  }

  handleSubmit() {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type": "application/json"
    };
    console.log(this.state);
    var data = {
      name: this.state.category_name
    };
    axios
      .post("https://mcmall.herokuapp.com/api/users/createCategory", data, {
        headers: headers
      })
      .then(response => {
        console.log(response, "res");
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
          <Col xs="12" md="6" style={{ float: "none", margin: "0 auto" }}>
            <Card>
              <CardHeader>
                <strong style={{ float: "none", margin: "0 auto" }}>
                  Add Category
                </strong>
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
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  style={{ float: "none", margin: "0 auto" }}
                  onClick={this.handleSubmit}
                >
                  <i className="fa fa-dot-circle-o" /> Add
                </Button>
              </CardFooter>
            </Card>
            <Card style={{ marginTop: "10%" }}>
              <CardHeader>
                <strong style={{ float: "none", margin: "0 auto" }}>
                  Add Sub Category
                </strong>
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
                      <Label htmlFor="CatofSubCat">Category Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        id="CatofSubCat"
                        name="CatofSubCat"
                        value={this.state.CatofSubCat}
                        onChange={this.handleChange}
                      >
                        {this.state.res && this.state.res.message.length > 0 ? (
                          this.state.res.message.map(each => (
                            <option key={each.name} value={each.id}>
                              {each.name}
                            </option>
                          ))
                        ) : (
                          <option>No data</option>
                        )}
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
                        id="subCatName"
                        name="subCatName"
                        placeholder="Sub Category Name"
                        value={this.state.subCatName}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  style={{ float: "none", margin: "0 auto" }}
                  onClick={this.handleSubCategory}
                >
                  <i className="fa fa-dot-circle-o" /> Add
                </Button>
              </CardFooter>
            </Card>
            <Card style={{ marginTop: "10%" }}>
              <CardHeader>
                <strong style={{ float: "none", margin: "0 auto" }}>
                  Edit Category
                </strong>
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
                      <Input
                        type="select"
                        id="editCat"
                        name="editCat"
                        value={this.state.editCat}
                        onChange={this.handleChange}
                      >
                        {this.state.res && this.state.res.message.length > 0 ? (
                          this.state.res.message.map(each => (
                            <option key={each.name} value={each.id}>
                              {each.name}
                            </option>
                          ))
                        ) : (
                          <option>No data</option>
                        )}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="editCatName">Edit Category Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="editCatName"
                        name="editCatName"
                        value={this.state.editCatName}
                        onChange={this.handleChange}
                        placeholder="Category Name"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  style={{ float: "none", margin: "0 auto" }}
                  onClick={this.handleEditCategory}
                >
                  <i className="fa fa-dot-circle-o" /> Save
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong style={{ float: "none", margin: "0 auto" }}>
                  Delete Category
                </strong>
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
                      <Input
                        type="select"
                        id="deleteCat"
                        name="deleteCat"
                        value={this.state.deleteCat}
                        onChange={this.handleChange}
                      >
                        {this.state.res && this.state.res.message.length > 0 ? (
                          this.state.res.message.map(each => (
                            <option key={each.name} value={each.id}>
                              {each.name}
                            </option>
                          ))
                        ) : (
                          <option>No data</option>
                        )}
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  style={{ float: "none", margin: "0 auto" }}
                  onClick={this.handleDeleteCategory}
                >
                  <i className="fa fa-dot-circle-o" /> Delete
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <strong style={{ float: "none", margin: "0 auto" }}>
                  Delete Sub Category
                </strong>
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
                      <Input
                        type="select"
                        id="deleteSubCat"
                        name="deleteSubCat"
                        value={this.state.deleteSubCat}
                        onChange={this.handleChange}
                      >
                        {this.state.res && this.state.res.message.length > 0 ? (
                          this.state.res.message.map(each => (
                            <option key={each.name} value={each.id}>
                              {each.name}
                            </option>
                          ))
                        ) : (
                          <option>No data</option>
                        )}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="delsubCatSubCategory">
                        Sub Category Name
                      </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        id="deleteSubCatSub"
                        name="deleteSubCatSub"
                        value={this.state.deleteSubCatSub}
                        onChange={this.handleChange}
                      >
                        {this.state.res && this.state.res.message.length > 0 ? (
                          this.state.res.message.map(each => (
                            <option key={each.name} value={each.id}>
                              {each.name}
                            </option>
                          ))
                        ) : (
                          <option>No data</option>
                        )}
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  style={{ float: "none", margin: "0 auto" }}
                >
                  <i className="fa fa-dot-circle-o" /> Delete
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