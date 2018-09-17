import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addItem } from '../../actions';
import './style.css'

class NewItem extends Component {
  state = { product: '', qty: '', price: '' }

  onFormSubmit(e) {
    const { addNewItem } = this.props
    e.preventDefault();
    addNewItem(this.state)
    this.setState({
      product: '',
      qty: '',
      price: ''
    })
  }

  render() {
    return (
      <div className="form-container">
        <h3>Add New Item</h3>
        <Form onSubmit={this.onFormSubmit.bind(this)}>
          <FormGroup>
            <Input
              type="text"
              name="product"
              placeholder="Product Name"
              value={this.state.product}
              onChange={e => this.setState({ product: e.target.value })}
              required
            />
            <Input
              type="number"
              name="qty"
              placeholder="Quantity"
              value={this.state.qty}
              onChange={e => this.setState({ qty: e.target.value })}
              required
            />
            <Input
              type="number"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={e => this.setState({ price: e.target.value })}
              required
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: (item) => dispatch(addItem(item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewItem)