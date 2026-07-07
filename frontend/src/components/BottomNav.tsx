import { House, Wallet, CirclePlus, Brain, User } from "lucide-react";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full">

      <div className="max-w-md mx-auto relative">

        <Link
          to="/add-expense"
          className="absolute left-1/2 -translate-x-1/2 -top-7"
        >
          <div className="w-16 h-16 rounded-full bg-[#5B3A29] shadow-xl flex items-center justify-center">
            <CirclePlus size={32} color="white" />
          </div>
        </Link>

        <div className="bg-[#FCF8F3] border-t border-[#E5D6C7] rounded-t-3xl px-8 py-5 flex justify-between items-center">

          <Link to="/home">
            <House className="text-[#5B3A29]" size={24} />
          </Link>

          <Link to="/expenses">
            <Wallet className="text-[#5B3A29]" size={24} />
          </Link>

          <div className="w-16"></div>

          <Link to="/insights">
            <Brain className="text-[#5B3A29]" size={24} />
          </Link>

          <Link to="/profile">
            <User className="text-[#5B3A29]" size={24} />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default BottomNav;