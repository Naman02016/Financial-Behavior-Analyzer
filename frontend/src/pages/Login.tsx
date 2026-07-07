import { useNavigate, Link } from "react-router-dom";
import { Eye, Mail, Lock } from "lucide-react";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5EEE6] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[32px] bg-[#FCF8F3] shadow-2xl p-10">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#EFE2D2] flex items-center justify-center">
            <Lock size={34} className="text-[#5B3A29]" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-center text-[#4A2F24] mb-3">
          Login
        </h1>

        <p className="text-center text-[#8A7568] mb-10">
          Welcome back! Please login to continue.
        </p>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Email
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3 mb-6">
          <Mail className="text-[#8A7568]" size={20} />
          <input
            type="email"
            placeholder="Enter your email"
            className="ml-3 w-full bg-transparent outline-none"
          />
        </div>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Password
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3">
          <Lock className="text-[#8A7568]" size={20} />

          <input
            type="password"
            placeholder="Enter your password"
            className="ml-3 w-full bg-transparent outline-none"
          />

          <Eye className="text-[#8A7568] cursor-pointer" size={20} />
        </div>

        <div className="text-right mt-4 mb-8">
          <button className="text-[#5B3A29] text-sm hover:underline">
            Forgot Password?
          </button>
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-full rounded-2xl bg-[#5B3A29] text-white py-4 text-lg font-semibold hover:bg-[#47261A] transition"
        >
          Login
        </button>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-[#E5D6C7]"></div>
          <span className="mx-4 text-[#8A7568]">or</span>
          <div className="flex-1 h-px bg-[#E5D6C7]"></div>
        </div>

        <p className="text-center text-[#7C6B60]">
          Don't have an account?
        </p>

        <div className="text-center mt-2">
          <Link
            to="/signup"
            className="font-semibold text-[#4A2F24] hover:underline"
          >
            Create Account →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Login;