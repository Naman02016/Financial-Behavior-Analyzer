const API_URL = "http://127.0.0.1:8000";

export async function loginUser() {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
  });

  return response.json();
}