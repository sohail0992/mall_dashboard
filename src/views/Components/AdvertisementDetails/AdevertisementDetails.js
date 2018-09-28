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
  InputGroupButton
} from "reactstrap";


class AdevertisementDetails extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Advertisment
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
                    <th>Date of Advertisement</th>
                    <th>Payment</th>
                    <th>Image</th>
                    <th>Duration(From)</th>
                    <th>Duration(To)</th>
                    <th>Details</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <button  style={{'backgroundColor':'green'}}> <Badge color="success">View</Badge></button>
                    </td>
                    <td>2012/01/01</td>
                    <td>2012/01/01</td>
                    <td>
                      <button  style={{'backgroundColor':'green'}}> <Badge color="success">View</Badge></button>
                    </td>
                  </tr>
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
