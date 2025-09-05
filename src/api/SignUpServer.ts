

export async function createUsser(userName:string,password:string) {
  try {
    const res = await fetch("http://localhost:3000/players/insertPlayer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        password: password,
        UserType: "normal user",
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "you have a problem with respons");
    }
    return data
  } catch (err) {
    console.error("you have a problem with conected", err);
    throw err;
  }
}
