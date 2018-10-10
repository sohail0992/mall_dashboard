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
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop_name:'',
      shop_address:'',
      shop_city:'',
      shop_image:'',
      shop_longitude:'',
      shop_latitude:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K",
      "Content-Type":"application/json"
    };
    console.log(this.state)
   
    var data = {
      name: this.state.shop_name,
      address: this.state.shop_address,
      city:this.state.shop_city,
      image:this.state.shop_image,
      latitude:this.state.shop_latitude,
      longitude:this.state.shop_latitude,
      mall_id:this.state.mall_name,
      category:this.state.shop_category,
      subcategory:this.state.shop_subcategory
    };
    axios.post("https://mcmall.herokuapp.com/api/users/createMall", data, {
        headers: headers
      })
      .then(response => {
        console.log(response,'res');
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" style={{'float': 'none', 'margin': '0 auto'}}>
            <Card>
              <CardHeader>
                <strong>Create Mail</strong>
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
                      <Label htmlFor="shop_name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="shop_name"
                        name="shop_name"
                        placeholder="Mall Name"
                        value={this.state.shop_name}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_address">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="shop_address"
                        name="shop_address"
                        placeholder="Mall Address"
                        value={this.state.shop_address}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_city">City</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="shop_city"
                        name="shop_city"
                        placeholder="Mall City"
                        value={this.state.shop_city}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Pick Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file"  id="shop_image" name="shop_image"  value={this.state.shop_image} onChange={this.handleChange} />
                    </Col>
                  </FormGroup>
                      <FormGroup row>
                    <Col md="3">
                      <Label>Google Map</Label>
                    </Col>
                    <Col xs="12" md="4">
                      <Input
                        type="text"
                        id="shop_latitude"
                        name="shop_latitude"
                        placeholder="Latitude"
                        value={this.state.shop_latitude}
                        onChange={this.handleChange}
                      />
                     </Col>
                     <Col xs="12" md="4">
                       <Input
                        type="text"
                        id="shop_longitude"
                        name="shop_longitude"
                        placeholder="Longitude"
                        value={this.state.shop_longitude}
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary" onClick={this.handleSubmit}>
                  <i className="fa fa-dot-circle-o" /> Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;