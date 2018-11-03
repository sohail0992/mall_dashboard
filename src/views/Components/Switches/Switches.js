
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

class Switches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      malls_data : []
    };
    this.getAllMalls()
 }

  getAllMalls() {
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    axios
      .get("https://mcmall.herokuapp.com/api/users/createShopDetails", {
        headers: headers
      })
      .then(response => {
        console.log(response.data.allMalls)
        this.setState({ malls_data: response.data.allMalls });
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
                      <Label htmlFor="mall_name">Mall</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="select"
                        id="mall_name"
                        name="mall_name"
                        value={this.state.mall_name}
                        onChange={this.handleChange}
                      >
                        {this.state.malls_data ? (
                          this.state.malls_data.map((mall, key) => {
                            return (
                              <option key={key} value={mall.id}>
                                {mall.name}
                              </option>
                            );
                          })
                        ) : (
                          <option>No data</option>
                        )}
                      </Input>
                    </Col>
                   </FormGroup>
                </Form>
              </CardBlock>
              <CardFooter>
                <Button type="submit" size="sm" color="primary">
                  <i className="fa fa-dot-circle-o"  style={{'float': 'none', 'margin': '0 auto'}}/> Delete
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Switches;