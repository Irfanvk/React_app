import React from 'react';
import { connect } from 'react-redux'
import { Table, Alert, Jumbotron, Container, Button } from 'reactstrap';
import { editItem, removeItem } from '../../actions'
import Total from '../Total'
import './style.css';
import 'font-awesome/css/font-awesome.min.css';

const Items = ({ items, editItemIndex, removeItemIndex }) => (
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
            <th>Modify</th>
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
              <td><Button className="fa fa-edit" 
                   name="edit" title="edit details" onClick={() => editItemIndex(item)}/>
                  <Button className="fa fa-trash" onClick= {() => removeItemIndex(item)} name="delete" title="remove this row"/> </td>
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
  console.log("State", state)
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editItemIndex: (index) => dispatch(editItem(index)),
    removeItemIndex: (index) => dispatch(removeItem(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)
