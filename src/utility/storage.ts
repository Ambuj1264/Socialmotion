"use client";

import { useEffect, useState } from "react";

export  function GetLocalStorageData(key: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const storedData = window.localStorage.getItem(key);
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error: any) {
      console.log("Error retrieving data from local storage:", error.message);
    }
  }, [key]);

  return data;
}
