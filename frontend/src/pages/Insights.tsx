import BottomNav from "../components/BottomNav";

function Insights() {
  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          AI Insights
        </h1>

        <div className="rounded-2xl bg-[#FCF8F3] p-6 shadow-lg mb-6">
          <h2 className="font-semibold text-xl text-[#4A2F24]">
            Financial Health
          </h2>

          <p className="mt-4 text-[#8A7568]">
            Add expenses to generate AI insights.
          </p>
        </div>

      </div>

      <BottomNav />

    </div>
  );
}

export default Insights;