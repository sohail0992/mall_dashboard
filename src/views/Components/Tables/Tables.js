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
  PaginationLink
} from "reactstrap";


class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users
              </CardHeader>
              <CardBlock className="card-body">
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <button  style={{'backgroundColor':'red'}}> <Badge color="danger">Block</Badge></button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <button  style={{'backgroundColor':'red'}}> <Badge color="danger">Block</Badge></button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <button  style={{'backgroundColor':'red'}}> <Badge color="danger">Block</Badge></button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <button  style={{'backgroundColor':'red'}}> <Badge color="danger">Block</Badge></button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <button  style={{'backgroundColor':'red'}}> <Badge color="danger">Block</Badge></button>
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

export default Tables;
