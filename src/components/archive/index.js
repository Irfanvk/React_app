import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Table, Jumbotron, Container, Button } from 'reactstrap';
import { restoreItem, removeItem } from '../../actions' 


export class Archive extends Component {
  render() {
    const { archivedItems, restoreItemIndex, removeItemIndex } = this.props
    return (
      <div>
            <div className="items-container">
      <h3>Archive Items</h3>
      <Jumbotron fluid>
          <Container fluid>
      <Table striped>
      <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Restore / Delete</th>
            </tr>
          </thead>
        <tbody>
          {
           archivedItems.map((item, index) => (
              <tr key={index}>
                <td>{ item.product }</td>
                <td>{ item.qty }</td>
                <td>{ item.price }</td>
                <td><Button className="fa fa-undo" 
                     name="edit" title="restore" onClick={() => restoreItemIndex(index)}/>
                    <Button className="fa fa-trash" onClick= {() => removeItemIndex(index)} name="delete" title="Delete this Item"/> </td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>
      </Container>
      </Jumbotron>
    </div>
      </div>
    )
  }
}
  const mapStateToProps = state => {
    return {
      archivedItems: state.items.archiveItems
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      restoreItemIndex: (item) => dispatch(restoreItem(item)),
      removeItemIndex: (index) => dispatch(removeItem(index))
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Archive)