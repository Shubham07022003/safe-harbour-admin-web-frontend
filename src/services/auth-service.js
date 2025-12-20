import { apiClient } from "./api-client";

export async function login(email, password) {
  try {
    const res = await apiClient.post("/api/user/adminlogin", {
      email,
      Password: password, // 👈 backend expects capital P
    });

    return res;
  } catch (error) {
    // ✅ VERY IMPORTANT: return the backend response
    if (error.response) {
      return error.response;
    }

    // network / unknown error
    return {
      status: 0,
      data: { msg: "Server not responding" },
    };
  }
}
