import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './Expenses.css'
import '../ExpensesFilter/ExpensesFilter.css';
import Card from '../UI/Card'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} className="expenses-filter" onChangeFilter={filterChangeHandler} />
                {props.items.map(i => (
                <ExpenseItem
                    title={i.title} 
                    amount={i.amount} 
                    date={i.date}
                ></ExpenseItem>))}
            </Card>
        </div>
    )
}

export default Expenses;