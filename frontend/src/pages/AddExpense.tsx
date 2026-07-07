import BottomNav from "../components/BottomNav";

function AddExpense() {
  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Add Expense
        </h1>

        {/* Amount */}

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Amount
        </label>

        <input
          type="number"
          placeholder="₹ 0"
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        {/* Category */}

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Category
        </label>

        <select className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none">
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

        {/* Date */}

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Date
        </label>

        <input
          type="date"
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        {/* Time */}

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Time
        </label>

        <input
          type="time"
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-6 outline-none"
        />

        {/* Description */}

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Description
        </label>

        <textarea
          placeholder="Optional..."
          rows={4}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-8 outline-none resize-none"
        ></textarea>

        <button className="w-full rounded-2xl bg-[#5B3A29] text-white py-4 text-lg font-semibold">
          Save Expense
        </button>

      </div>

      <BottomNav />

    </div>
  );
}

export default AddExpense;