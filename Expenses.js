import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
return (
    <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((expense, index) => (
      <ExpenseItem 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 
      />
      ))};
    </Card>
  );
};

export default Expenses;