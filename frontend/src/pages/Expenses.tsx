import BottomNav from "../components/BottomNav";

function Expenses() {
  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Expenses
        </h1>

        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-5 outline-none"
        />

        <button className="mb-8 rounded-xl bg-[#5B3A29] px-5 py-2 text-white">
          Filter
        </button>

        <div className="rounded-2xl bg-[#FCF8F3] p-5 shadow-lg">
          <p className="text-[#8A7568]">
            No expenses available.
          </p>
        </div>

      </div>

      <BottomNav />

    </div>
  );
}

export default Expenses;