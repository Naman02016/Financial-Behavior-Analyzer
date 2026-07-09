import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5EEE6] pb-28">

      <div className="max-w-md mx-auto px-6 pt-10">

        <h1 className="text-3xl font-bold text-[#4A2F24] mb-8">
          Profile
        </h1>

        <div className="space-y-4">

          <button
            className="w-full rounded-2xl bg-[#FCF8F3] p-5 text-left shadow-lg"
          >
            Account
          </button>

          <button
            className="w-full rounded-2xl bg-[#FCF8F3] p-5 text-left shadow-lg"
          >
            Settings
          </button>

          <button
            onClick={() => navigate("/")}
            className="w-full rounded-2xl bg-[#FCF8F3] p-5 text-left shadow-lg text-red-600"
          >
            Logout
          </button>

        </div>

      </div>

      <BottomNav />

    </div>
  );
}

export default Profile;