"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const testapi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dumbstockapi.com/stock?exchanges=NYSE"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      <main className="flex justify-around">
        <Link href="/">Home</Link>
        {loading ? (
          <div>loading...</div>
        ) : (
          <ul>
            {data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}
          </ul>
        )}
      </main>
    </div>
  );
};

export default testapi;
