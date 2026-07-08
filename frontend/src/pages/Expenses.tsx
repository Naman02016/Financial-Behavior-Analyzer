import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getExpenses, deleteExpense } from "../services/expenseApi";
import BottomNav from "../components/BottomNav";

function Expenses() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState<any[]>([]);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id: number) => {
    const result = await deleteExpense(id);
    console.log(result);

    await fetchExpenses();
  };

  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">
      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Expenses
        </h1>

        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-8 outline-none"
        />

        {expenses.length === 0 ? (
          <div className="rounded-2xl bg-[#FCF8F3] p-5 shadow-lg">
            <p className="text-[#8A7568]">
              No expenses available.
            </p>
          </div>
        ) : (
          expenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-[#FCF8F3] rounded-2xl shadow-lg p-5 mb-4"
            >
              <div className="flex justify-between items-center">

                <div>
                  <h2 className="text-lg font-semibold text-[#4A2F24]">
                    {expense.category}
                  </h2>

                  <p className="text-[#8A7568] mt-1">
                    {expense.description}
                  </p>

                  <p className="text-sm text-[#A18B7A] mt-2">
                    {expense.expense_date}
                  </p>
                </div>

                <div className="text-right">

                  <p className="text-xl font-bold text-[#5B3A29]">
                    ₹{expense.amount}
                  </p>

                  <button
                    onClick={() => navigate(`/edit-expense/${expense.id}`)}
                    className="text-blue-600 text-sm mt-3 hover:underline block"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(expense.id)}
                    className="text-red-500 text-sm mt-2 hover:underline block"
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          ))
        )}

      </div>

      <BottomNav />
    </div>
  );
}

export default Expenses;