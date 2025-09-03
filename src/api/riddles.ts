import { useEffect, useState } from "react";

type Riddles = {
    id:Number,
    name:string,
    question:string
    answer:string
}
// function thet get all riddles
async function getAllRiddles() {
  const [data, setData] = useState<Riddles[]>([]);

  try {
    useEffect(() => {
      fetch("http://localhost:3000/reddles")
        .then((res) => res.json())
        .then((data:Riddles[]) => setData(data));
    }, []);
  } catch (err) {
    console.error("you have a problme", err);
  }
  console.log(data)
}


export{
    getAllRiddles
}