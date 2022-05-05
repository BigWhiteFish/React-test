import React, {useState} from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './Expenses.css'
import '../ExpensesFilter/ExpensesFilter.css';
import Card from '../UI/Card'
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    let filtered = props.items.filter(item => item.date.getFullYear() === parseInt(filteredYear));

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} className="expenses-filter" onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filtered} />
                <ExpensesList items={filtered}/>
            </Card>
        </div>
    )
}

export default Expenses;