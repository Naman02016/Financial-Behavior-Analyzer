import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import Insights from "./pages/Insights";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/edit-expense/:id" element={<AddExpense />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;