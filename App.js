import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';
import Expenses from './components/Expenses/Expenses.js';

const App = () => {
  const expenses= [
    {
      id: 'e1',
      title: 'Bike Insurance',
      amount: 2000,
      date: new Date(2022, 7, 17)
    },
    {
      id: 'e2',
      title: 'Jewels',
      amount: 500000,
      date: new Date(2021, 8, 27)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 500,
      date: new Date(2022, 1, 18)
    },
    {
      id: 'e4',
      title: 'Movie',
      amount: 300,
      date: new Date(2021, 1, 1)
    }
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }


  // return React.createElement(
  //   'div',
  //  {},
  // React.createElement('h2', {}, "Lets Get Started"), 
  // React.createElement(Expenses, {items: expenses})
  // );
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses} />
   </div>
 );
}

export default App;
