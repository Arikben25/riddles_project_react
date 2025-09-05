export default async function logInUser(userName: string, password: string) {
  try {
    const res = await fetch("http://localhost:3000/players/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        password: password,
      }),
    });
    if (!res.ok) {
      let errorMsg = "Server responded with an error.";
      try {
        const errorData = await res.json();
        errorMsg = errorData.msg || errorMsg;
      } catch (err) {
        return {
          success: false,
          status: 500,
          error: "Server responded with an error.",
        };
      }
      return { success: false, status: res.status, error: errorMsg };
    }
    const data = await res.json();
    return { success: true, status: res.status, data };
  } catch (err) {
    console.error("Problem with connection:", err);
    return { success: false, status: 0, error: "Could not connect to server." };
  }
}
