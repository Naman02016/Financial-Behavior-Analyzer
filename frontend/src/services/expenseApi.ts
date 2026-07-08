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
  const response = await fetch(`${API_URL}/expenses`);
  return response.json();
}

export async function getTodayExpenses() {
  const response = await fetch(`${API_URL}/expenses/today`);
  return response.json();
}

export async function getInsight() {
  const response = await fetch(`${API_URL}/analytics/insight`);
  return response.json();
}

export async function deleteExpense(id: number) {
  const response = await fetch(`${API_URL}/expense/${id}`, {
    method: "DELETE",
  });

  return response.json();
}

export async function getExpense(id: number) {
  const response = await fetch(`${API_URL}/expense/${id}`);
  return response.json();
}

export async function updateExpense(
  id: number,
  expense: {
    amount: number;
    category: string;
    expense_date: string;
    expense_time: string;
    description: string;
  }
) {
  const response = await fetch(`${API_URL}/expense/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  return response.json();
}