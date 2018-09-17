import React from 'react';
import { connect } from 'react-redux'
import { Table, Alert, Jumbotron, Container } from 'reactstrap';
import Total from '../Total'
import './style.css';

const Items = ({ items }) => (
  <div className="items-container">
    <h3>Items</h3>
    <Jumbotron fluid>
        <Container fluid>
    <Table striped>
    <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
      <tbody>
        {
          Object.keys(items).map((item, index) => (
            <tr key={index}>
              <td>{ items[item].product }</td>
              <td>{ items[item].qty }</td>
              <td>{ items[item].price }</td>
              <td>{ Number(Number(items[item].qty) * Number(items[item].price)).toFixed(2) }</td>
            </tr>
          ))
        }
        {
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><Alert color="dark">{<Total/>}
              </Alert></td>
          </tr>
        }
      </tbody>
    </Table>
    </Container>
    </Jumbotron>
  </div>
);

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(
  mapStateToProps,
  null
)(Items)
