import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
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


  return (
    <div>
      <h2>Lets get Started</h2>
      <ExpenseItem 
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem 
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
