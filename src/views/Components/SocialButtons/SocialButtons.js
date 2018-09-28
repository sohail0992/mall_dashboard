
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

class SocialButtons extends Component {
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
                      <Input type="select" name="ccmall" id="ccmall">
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
                      <Label htmlFor="text-input">Mall Name</Label>
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
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Mall Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Mall Address"
                      />
                    </Col>
                  </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="ccmall">Shop list</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="ccmall" id="ccmall">
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
                <Button type="submit" size="sm" color="primary">
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