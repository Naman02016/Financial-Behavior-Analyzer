import { useEffect, useState } from "react";
import { getTodayExpenses } from "../services/expenseApi";
import BottomNav from "../components/BottomNav";
function Home() {
  const [expenses, setExpenses] = useState<any[]>([]);

useEffect(() => {
  async function fetchExpenses() {
    const data = await getTodayExpenses();
    setExpenses(data);
  }

  fetchExpenses();
}, []);
const totalSpent = expenses.reduce(
  (sum, expense) => sum + expense.amount,
  0
);
  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-24">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24]">
          Today's Spending
        </h1>

        <h2 className="text-6xl font-bold text-[#5B3A29] mt-6">
          ₹(totalSpent)
        </h2>

        <p className="text-[#8A7568] mt-3">
         {expenses.length === 0
  ? "No expenses added."
  : `${expenses.length} expense(s) recorded.`}
        </p>

        <div className="mt-10 rounded-3xl bg-[#FCF8F3] shadow-lg p-6">

          <h3 className="text-xl font-semibold text-[#4A2F24]">
            Today's Expenses
          </h3>

          <div className="mt-6 text-[#8A7568]">
           {expenses.length === 0 ? (
  <p className="text-[#8A7568]">
    Nothing to show.
  </p>
) : (
  expenses.map((expense) => (
    <div
      key={expense.id}
      className="flex justify-between py-3 border-b border-[#E5D6C7]"
    >
      <div>
        <p className="font-medium text-[#4A2F24]">
          {expense.category}
        </p>
        <p className="text-sm text-[#8A7568]">
          {expense.description}
        </p>
      </div>

      <p className="font-semibold text-[#5B3A29]">
        ₹{expense.amount}
      </p>
    </div>
  ))
)}
          </div>

        </div>

        <div className="mt-8 rounded-3xl bg-[#FCF8F3] shadow-lg p-6">

          <h3 className="text-xl font-semibold text-[#4A2F24]">
            AI Insight
          </h3>

          <p className="mt-4 text-[#8A7568]">
            Start adding expenses to receive personalized insights.
          </p>

        </div>

      </div>
    <BottomNav />
    </div>
  );
}

export default Home;