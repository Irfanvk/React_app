import React from 'react'
import { connect } from 'react-redux'

const Total = ({ items }) => {
  let total = 0
  Object.keys(items).map(item => (
    total += Number(items[item].price*items[item].qty)
  ))
  return (
    <div>
      {
        Number(total).toFixed(2)
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

export default connect(
  mapStateToProps,
  null
)(Total)