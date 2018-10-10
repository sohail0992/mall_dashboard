import React, {Component} from "react";
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import axios from "axios";

class AdevertisementDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {
      res:''
    };
    this.getAdvertisementDetails()
 }
 
getAdvertisementDetails(){
    var headers = {
      "x-access-key": "Q4OR-TCXT-AO1B-M61K"
    };
    axios
      .get("https://mcmall.herokuapp.com/api/users/getAdds", {
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
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Advertisment Details
              </CardHeader>
              <CardBlock className="card-body">
              <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col xs="12" md="6" style={{'float': 'none', 'margin': '0 auto'}}>
                      <Input
                        type="text"
                        id="text-input"
                        name="text-input"
                        placeholder="Search"
                      />
                    </Col>
                  </FormGroup>
                  </Form>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Shop Name</th>
                    <th>Mall Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Shop No.</th>
                    <th>Floor No No.</th>
                    <th>Payment</th>
                    <th>Image</th>
                    <th>Duration(From)</th>
                    <th>Duration(To)</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.res.message && this.state.res.message.length>0
                    ?
                      <tr>
                        <td>1</td>
                        <td>Vishnu Serghei</td>
                        <td>email@em.com</td>
                        <td>xxxx</td>
                        <td>8-86</td>
                        <td>2</td>
                        <td>Paid</td>
                        <td>
                          <button  style={{'backgroundColor':'green'}}> <Badge color="success">View</Badge></button>
                        </td>
                        <td>2012/01/01</td>
                        <td>2012/01/01</td>
                        <td>
                            <Input type="select" name="status" id="status">
                                  <option value="1" selected="selected">Approved</option>
                                  <option value="0">Not</option>
                            </Input>
                        </td>
                      </tr>
                      :
                      <p>
                      No Record
                      </p>
                    }
                  </tbody>
                </Table>          
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default AdevertisementDetails;
