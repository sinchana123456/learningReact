import './ExpenseItem.css';

function ExpenseItem(){
const expenseDate = new Date(1996, 2, 27);
const expenseTitle='Food';
const expenseAmount=10;

    return (
    <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
        </div>
        </div>
        );
}

export default ExpenseItem;