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
class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mall_name:'addidas',
      shop_name:'',
      password:'',
      shop_no:'',
      shop_floor:'',
      shop_image:'',
      shop_category:[],
      shop_subcategory:'',
      shop_longitude:'',
      shop_latitude:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    var list_categories = {
        data: [{
            id: 'id1',
            name: 'Addidas'
        }, {
            id: 'id2',
            name: 'Addidas2'
        }]
    };       
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleCheck(event){
    var joined = this.state.shop_category.concat(event.target.value);
    this.setState({ shop_category: joined })
    console.log(this.state,'state')
    // console.log(event.target.name,'event')
    // console.log(event.target.value,'value')
    // this.setState(shop_category:shop_category.concat([event.target.value]))
    // this.state.shop_category.push(event.target.value,'')

  }

  handleSubmit(event) {
    event.preventDefault();
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    console.log(this.state)
   
    var data = {
      name: this.state.mall_name,
      username:this.state.shop_name,
      password:this.state.password,
      image:this.state.shop_image,
      shop_no:this.state.shop_no,
      floor:this.state.shop_floor,
      latitude:this.state.shop_latitude,
      longitude:this.state.shop_latitude,
      mall_id:this.state.mall_name,
      category:this.state.shop_category,
      subcategory:this.state.shop_subcategory
    };
    axios
      .post("https://mcmall.herokuapp.com/api/users/createShop", data, {
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
    let checkBoxArray = ['lorem','ipsum','dolor'];
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6"  style={{'float': 'none', 'margin': '0 auto'}}>
            <Card>
              <CardHeader>
                <strong>Create Shop</strong>
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
                      <Label htmlFor="mall_name">Mall</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="mall_name" id="mall_name" value={this.state.mall_name} onClick={() => this.setState({ mall_name: null })}>
                        <option value={"addidas"} selected="selected">Addidas</option>
                        <option value={"addidas2"}>Addidas2</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_name">Shop Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="shop_name"
                        name="shop_name"
                        placeholder="Shop Name"
                        value={this.state.shop_name} 
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="password">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password} 
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Shop No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="shop_no"
                        name="shop_no"
                        placeholder="Shop No"
                        value={this.state.shop_no} 
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_floor">Floor No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="number"
                        id="shop_floor"
                        name="shop_floor"
                        placeholder="Floor No"
                        value={this.state.shop_floor} 
                        onChange={this.handleChange}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_image">Pick Image</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="shop_image" name="shop_image"  value={this.state.shop_image} onChange={this.handleChange} />
                    </Col>
                  </FormGroup>
                <FormGroup row>
                  <Col md="3"><Label>Categories</Label></Col>
                  <Col md="9">
                    <FormGroup check>
                      <div className="checkbox">
                        <Label check htmlFor="shop_category1">
                          <Input type="checkbox" id="shop_category1" onChange={this.handleCheck} name="shop_category" value={"Beauty & health Care"} /> Beauty & health Care
                        </Label>
                      </div>
                      <div className="checkbox">
                        <Label check htmlFor="shop_category3">
                          <Input type="checkbox" id="shop_category3" onChange={this.handleCheck}  name="shop_category" value={"Fashin Accessories"} /> Fashin Accessories
                        </Label>
                      </div>
                      <div className="checkbox">
                        <Label check htmlFor="shop_category4">
                          <Input type="checkbox" id="shop_category4" onChange={this.handleCheck}  name="shop_category" value={"Fast Food"}/> Fast Food
                         </Label>
                      </div>
                    </FormGroup>
                  </Col>
                </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="shop_subcategory">Sub Category</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="shop_subcategory"
                        name="shop_subcategory"
                        placeholder="Sub Category"
                        value={this.state.shop_subcategory}
                        onChange={this.handleChange}
                      />
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

export default Buttons;