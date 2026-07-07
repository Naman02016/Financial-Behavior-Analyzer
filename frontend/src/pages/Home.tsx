import BottomNav from "../components/BottomNav";
function Home() {
  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-24">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24]">
          Today's Spending
        </h1>

        <h2 className="text-6xl font-bold text-[#5B3A29] mt-6">
          ₹0
        </h2>

        <p className="text-[#8A7568] mt-3">
          No expenses added today.
        </p>

        <div className="mt-10 rounded-3xl bg-[#FCF8F3] shadow-lg p-6">

          <h3 className="text-xl font-semibold text-[#4A2F24]">
            Today's Expenses
          </h3>

          <div className="mt-6 text-[#8A7568]">
            Nothing to show.
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