'use client'

import { useState, useEffect } from "react";

export default function Header() {
  const [data, setData] = useState("");
  const [day, setDay] = useState("");

  const greeting = "Добрый";

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
      setData("утро");
    } else if (hours >= 12 && hours < 18) {
      setData("день");
    } else if (hours >= 18 && hours < 24) {
      setData("вечер");
    } else {
      setData("ночи");
    }

    setDay(`${greeting} ${data}`);
  }, [data]);

  return <div className="text-2xl flex justify-center">{day}</div>;
}
