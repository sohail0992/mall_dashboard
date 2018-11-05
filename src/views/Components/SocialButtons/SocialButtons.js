
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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};
class SocialButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_mall:'',
      data: [],
      mall_name:'',
      mall_address: '',
      mall_shops:[],
      selected_shop:''
    };
    this.getShopDetails()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleShop = this.handleShop.bind(this);
 }

handleShop(event){
  this.setState({ [event.target.name]: event.target.value });
  console.log(this.state.selected_shop,'selected_shop')
}

handleSelect(event){
  this.setState({ [event.target.name]: event.target.value });
  this.state.data.map(mall=> {
    if(event.target.value.localeCompare(mall.id)===0){
      console.log(mall.shops,'shops')
        this.setState({
          mall_name:mall.name,
          mall_address: mall.address,
          mall_shops:mall.shops
      })
    }
  })
  // console.log(this.state,'state now')
}

handleInit(value){
  this.state.data.map(mall=> {
    if(value.localeCompare(mall.id)===0){
        // console.log(mall.shops,'only shops')
        this.setState({
          mall_name:mall.name,
          mall_address: mall.address,
          mall_shops:mall.shops
      })
    }
  })
}

handleSubmit(event){
   event.preventDefault();
   console.log(event,'event')
   console.log(this.state)
}

handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
}

getShopDetails(){
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    axios
      .get("https://mcmall.herokuapp.com/api/users/editShopDetails", {
        headers: headers
      })
      .then(response => {
         let malls = []
          // console.log(response.data,'response')
          if(response.data){
            response.data.mallsAndShops.map(value => {
                malls.push({
                  id : value.mall.id,
                  name : value.mall.name,
                  address: value.mall.address,
                  city: value.mall.city,
                  image: value.mall.image,
                  latitude: value.mall.latitude,
                  live_status: value.mall.live_status,
                  longitude: value.mall.longitude,
                  shops: value.shops
                })
            })
          // console
          this.setState({data: malls})
          // this.setState({mall_shops:malls.shops})
        }
        this.setState({selected_mall:malls[0].id})
        this.handleInit(malls[0])
        console.log(this.state,'state')
      
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
                      <Label htmlFor="ccmall">Select Mall</Label>
                    </Col>
                    <Col xs="12" md="9">
                       <Input
                        id="ccmall"
                        type="select"
                        name="selected_mall"
                        value={this.state.selected_mall}
                        onChange={this.handleSelect}
                      >
                       {this.state.data.map((name,key) => (
                          <option
                            key={key}
                            id={key}
                            value={name.id}
                          >
                          {name.name}
                          </option>
                        ))}
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="mall_name">Mall Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="mall_name"
                        name="mall_name"
                        placeholder="Mall Name"
                        value={this.state.mall_name}
                        readOnly
                      />
                    </Col>
                  </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="mall_address">Mall Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="mall_address"
                        name="mall_address"
                        value={this.state.mall_address}
                        placeholder="Mall Address"
                        readOnly
                      />
                    </Col>
                  </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ccshop">Shop list</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="selected_shop" value={this.state.selected_shop} onChange={this.handleShop} id="ccshop" >
                         {this.state.mall_shops ? 
                           this.state.mall_shops.map((shop,key) => (
                            <option
                              id={key}
                              key={key}
                              value={shop.id}
                            >
                            {shop.name}
                            </option> 
                          ))
                         : 
                         <option>
                           No data
                         </option>
                       }
                      </Input>
                    </Col>
                  </FormGroup>
                  <div style={{'max-width':'90%','float': 'none', 'margin': '0 auto'}}>
                  <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Assigned Mall</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                   <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Shop Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                 <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Phone no</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="4" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Shop User Name</Label>
                    </Col>
                    <Col xs="12" md="8">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                 <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Time Start</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Time Close</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','border-width': '0 0 2px','border-color': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3" style={{'marginTop':'4%'}}>
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        style={{  'outline': '0','borderWidth': '0 0 2px','borderColor': 'black'}}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Discount</Label>
                    </Col>
                    <Col xs="12" md="3">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="%"
                        style={{'textAlign':'right'}}
                      />
                    </Col>
                     <Col md="6">
                     <Label className="switch switch-text switch-pill switch-primary">
                  <Input type="checkbox" className="switch-input" defaultChecked/>
                  <span className="switch-label" data-on="On" data-off="Off"></span>
                  <span className="switch-handle"></span>
                </Label>
                    </Col>
                   </FormGroup>
                  </div>
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

export default SocialButtons;