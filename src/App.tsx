import ExpenseList from "./components/ExpenseList"
ExpenseList;
import ExpenseFilter from "./components/ExpenseFilter";
import { useState } from "react"

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] =useState([
    { id: 1, description: 'Groceries', amount: 50.25, category: 'Food' },
    { id: 2, description: 'Electricity Bill', amount: 75.00, category: 'Utilities' },
    { id: 3, description: 'Gym Membership', amount: 40.00, category: 'Health' },
  ])

  const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <div>
      <div className="mb-3"><ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} /></div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </div>
  )
}

export default App