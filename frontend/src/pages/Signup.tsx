import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, Mail, Lock, User } from "lucide-react";

const API_URL = "http://127.0.0.1:8000";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || data.message || "Signup failed.");
        return;
      }

      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EEE6] flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-[32px] bg-[#FCF8F3] shadow-2xl p-10">

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#EFE2D2] flex items-center justify-center">
            <User size={34} className="text-[#5B3A29]" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-center text-[#4A2F24] mb-3">
          Create Account
        </h1>

        <p className="text-center text-[#8A7568] mb-10">
          Create your account to continue.
        </p>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Full Name
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3 mb-6">
          <User className="text-[#8A7568]" size={20} />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none"
          />
        </div>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Email
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3 mb-6">
          <Mail className="text-[#8A7568]" size={20} />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none"
          />
        </div>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Password
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3 mb-6">
          <Lock className="text-[#8A7568]" size={20} />
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none"
          />
          <Eye className="text-[#8A7568]" size={20} />
        </div>

        <label className="block mb-2 text-[#4A2F24] font-medium">
          Confirm Password
        </label>

        <div className="flex items-center rounded-2xl border border-[#E5D6C7] bg-white px-4 py-3">
          <Lock className="text-[#8A7568]" size={20} />
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none"
          />
          <Eye className="text-[#8A7568]" size={20} />
        </div>

        <button
          onClick={handleSignup}
          className="w-full rounded-2xl bg-[#5B3A29] text-white py-4 text-lg font-semibold hover:bg-[#47261A] transition mt-8"
        >
          Create Account
        </button>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-[#E5D6C7]"></div>
          <span className="mx-4 text-[#8A7568]">or</span>
          <div className="flex-1 h-px bg-[#E5D6C7]"></div>
        </div>

        <p className="text-center text-[#7C6B60]">
          Already have an account?
        </p>

        <div className="text-center mt-2">
          <Link
            to="/"
            className="font-semibold text-[#4A2F24] hover:underline"
          >
            Login →
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Signup;