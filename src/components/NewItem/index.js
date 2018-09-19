import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { addItem, saveItem } from '../../actions';
import './style.css'

class NewItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: '',
      qty: '',
      price: ''
    }
  }
  // state = { product: this.props.data ? this.props.data['product'] this'', qty: '', price: '' }

  componentDidUpdate(prevProps) {
    if(prevProps.data === null && prevProps.data !== this.props.data) {
      this.setState({
        product: this.props.data['product'],
        qty: this.props.data['qty'],
        price: this.props.data['price']
      })
    }
  }

  onFormSubmit(e) {
    const { addNewItem, saveNewItem, data } = this.props
    e.preventDefault();
    if(data) {
      saveNewItem({
        ...this.state,
        key: this.props.data['key']
      })
    }
    else addNewItem(this.state)
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
          <Button>{ this.props.data ? "Save": "Add" }</Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewItem: (item) => dispatch(addItem(item)),
    saveNewItem: (item) => dispatch(saveItem(item))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewItem)