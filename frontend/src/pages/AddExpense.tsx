import { useState } from "react";
import { addExpense } from "../services/expenseApi";
import BottomNav from "../components/BottomNav";

function AddExpense() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseTime, setExpenseTime] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSaveExpense = async () => {
    const result = await addExpense({
      amount: Number(amount),
      category,
      expense_date: expenseDate,
      expense_time: expenseTime,
      description,
    });

    setMessage(result.message);

    setAmount("");
    setCategory("Food");
    setExpenseDate("");
    setExpenseTime("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">
      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Add Expense
        </h1>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Amount
        </label>

        <input
          type="number"
          placeholder="₹ 0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Education</option>
          <option>Health</option>
          <option>Bills</option>
          <option>Others</option>
        </select>

        <button className="text-[#5B3A29] font-semibold mb-6">
          + Add Category
        </button>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Date
        </label>

        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Time
        </label>

        <input
          type="time"
          value={expenseTime}
          onChange={(e) => setExpenseTime(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Description
        </label>

        <textarea
          placeholder="Optional..."
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-8 outline-none resize-none"
        />

        <button
          onClick={handleSaveExpense}
          className="w-full rounded-2xl bg-[#5B3A29] text-white py-4 text-lg font-semibold hover:bg-[#47261A] transition"
        >
          Save Expense
        </button>

        {message && (
          <p className="mt-5 text-center text-green-700 font-medium">
            {message}
          </p>
        )}

      </div>

      <BottomNav />
    </div>
  );
}

export default AddExpense;