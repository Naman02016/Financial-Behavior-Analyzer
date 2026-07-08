import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MoreVertical,
  Pencil,
  Trash2,
  UtensilsCrossed,
  Car,
  ShoppingBag,
  BookOpen,
  HeartPulse,
  Receipt,
  Film,
  Package,
} from "lucide-react";
import { getExpenses, deleteExpense } from "../services/expenseApi";
import BottomNav from "../components/BottomNav";

function Expenses() {
  const navigate = useNavigate();

  const [expenses, setExpenses] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteExpense(id);
    setOpenMenu(null);
    await fetchExpenses();
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Food":
        return <UtensilsCrossed size={20} className="text-[#8B5E3C]" />;

      case "Travel":
        return <Car size={20} className="text-[#8B5E3C]" />;

      case "Shopping":
        return <ShoppingBag size={20} className="text-[#8B5E3C]" />;

      case "Education":
        return <BookOpen size={20} className="text-[#8B5E3C]" />;

      case "Health":
        return <HeartPulse size={20} className="text-[#8B5E3C]" />;

      case "Bills":
        return <Receipt size={20} className="text-[#8B5E3C]" />;

      case "Entertainment":
        return <Film size={20} className="text-[#8B5E3C]" />;

      default:
        return <Package size={20} className="text-[#8B5E3C]" />;
    }
  };

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =
      expense.category.toLowerCase().includes(search.toLowerCase()) ||
      expense.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || expense.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">
      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Expenses
        </h1>

        <input
          type="text"
          placeholder="Search expenses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-5 outline-none"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-2xl border border-[#E5D6C7] bg-[#FCF8F3] px-5 py-4 mb-8 outline-none text-[#4A2F24]"
        >
          <option>All</option>
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Education</option>
          <option>Health</option>
          <option>Bills</option>
          <option>Entertainment</option>
          <option>Others</option>
        </select>

        {filteredExpenses.length === 0 ? (
          <div className="rounded-2xl bg-[#FCF8F3] p-5 shadow-lg">
            <p className="text-[#8A7568]">
              No matching expenses found.
            </p>
          </div>
        ) : (
          filteredExpenses.map((expense) => (
            <div
              key={expense.id}
              className="bg-[#FCF8F3] rounded-2xl shadow-md p-5 mb-4"
            >
              <div className="flex justify-between items-start">

                <div>

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-[#EFE2D2] flex items-center justify-center">
                      {getCategoryIcon(expense.category)}
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-[#4A2F24]">
                        {expense.category}
                      </h2>

                      <p className="text-[#8A7568]">
                        {expense.description}
                      </p>
                    </div>

                  </div>

                  <p className="text-sm text-[#B09B8C] mt-3">
                    {expense.expense_date}
                  </p>

                </div>

                <div className="relative text-right">

                  <p className="text-2xl font-bold text-[#5B3A29] mb-2">
                    ₹{expense.amount}
                  </p>

                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === expense.id ? null : expense.id
                      )
                    }
                    className="ml-auto"
                  >
                    <MoreVertical
                      size={20}
                      className="text-[#5B3A29]"
                    />
                  </button>

                  {openMenu === expense.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-[#E5D6C7] overflow-hidden z-20">

                      <button
                        onClick={() => {
                          setOpenMenu(null);
                          navigate(`/edit-expense/${expense.id}`);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[#4A2F24] hover:bg-[#F5EEE6] transition"
                      >
                        <Pencil size={17} />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(expense.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-[#FDECEC] transition"
                      >
                        <Trash2 size={17} />
                        <span>Delete</span>
                      </button>

                    </div>
                  )}

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