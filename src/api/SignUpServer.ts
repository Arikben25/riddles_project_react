

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

    if (!res.ok) {
      throw new Error("you have a problem with respons");
    }
  } catch (err) {
    console.error("you have a problem with conected", err);
  }
}
