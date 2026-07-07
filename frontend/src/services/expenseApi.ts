const API_URL = "http://127.0.0.1:8000";

export async function addExpense(expense: {
  amount: number;
  category: string;
  expense_date: string;
  expense_time: string;
  description: string;
}) {
  const response = await fetch(`${API_URL}/expense`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  return response.json();
}
export async function getExpenses() {
  const response = await fetch("http://127.0.0.1:8000/expenses");
  return response.json();
}
export async function getTodayExpenses() {
  const response = await fetch("http://127.0.0.1:8000/expenses/today");
  return response.json();
}