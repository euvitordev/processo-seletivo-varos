"use client";

// pages/data-list.tsx
import { useEffect, useState } from "react";

interface DataItem {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
}

export default function DataList() {
  const [dataList, setDataList] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/cadastro-mercado-financeiro");
      const data = await response.json();
      setDataList(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {dataList.map((item) => (
          <li key={item.id}>
            <strong>Name:</strong> {item.name}, <strong>Email:</strong>{" "}
            {item.email}, <strong>Phone:</strong> {item.phoneNumber}
          </li>
        ))}
      </ul>
    </div>
  );
}
