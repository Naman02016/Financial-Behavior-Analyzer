import { useEffect, useState } from "react";
import {
  getTodayExpenses,
  getInsight,
} from "../services/expenseApi";
import BottomNav from "../components/BottomNav";

function Home() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [insight, setInsight] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      const todayExpenses = await getTodayExpenses();
      const insightData = await getInsight();

      setExpenses(todayExpenses);
      setInsight(insightData);
    }

    loadData();
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
          ₹{totalSpent}
        </h2>

        <p className="text-[#8A7568] mt-3">
          {expenses.length === 0
            ? "No expenses added today."
            : `${expenses.length} expense(s) recorded.`}
        </p>

        <div className="mt-10 rounded-3xl bg-[#FCF8F3] shadow-lg p-6">

          <h3 className="text-xl font-semibold text-[#4A2F24]">
            Today's Expenses
          </h3>

          <div className="mt-6">
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
            🤖 AI Insight
          </h3>

          {!insight ? (
            <p className="mt-4 text-[#8A7568]">
              Loading insight...
            </p>
          ) : (
            <div className="mt-4 space-y-4 text-[#8A7568]">

              <div>
                <p className="font-semibold text-[#4A2F24]">
                  Today's Total
                </p>
                <p>₹{insight.today_total}</p>
              </div>

              <div>
                <p className="font-semibold text-[#4A2F24]">
                  Transactions Today
                </p>
                <p>{insight.today_count}</p>
              </div>

              <div>
                <p className="font-semibold text-[#4A2F24]">
                  Average Daily Spend
                </p>
                <p>₹{insight.average_daily}</p>
              </div>

              <div>
                <p className="font-semibold text-[#4A2F24]">
                  Highest Category
                </p>
                <p>{insight.highest_category ?? "None"}</p>
              </div>

              <div className="border-t border-[#E5D6C7] pt-4">
                <p className="font-semibold text-[#4A2F24]">
                  AI Analysis
                </p>

                <p className="mt-2 leading-7">
                  {insight.insight}
                </p>
              </div>

            </div>
          )}

        </div>

      </div>

      <BottomNav />
    </div>
  );
}

export default Home;