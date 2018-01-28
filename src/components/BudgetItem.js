import React from 'react';
import './BudgetItem.css'
import randomColor from 'randomcolor'


const BudgetItem = (props) => {
  console.log(props)
  return(
    <div className="budget-item">
      <h2 className="budget-item-name">{props.item.name}</h2
      <h2 className="budget-item-recurrence">{props.item.recurrence}</h2>
      <h3>${props.item.amount}</h3>
    </div>
  )
}

export default BudgetItem
