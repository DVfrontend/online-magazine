'use client'

import data from "@/data/socialMedia.json";
import { useEffect, useState } from "react";
import type { Socials } from "@/types";

function SocialMedia() {
  const [socials, setSocials] = useState<Socials[]>([]);

  useEffect(() => {
    setSocials(data);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Проекты</h1>
      <ul className="list-disc">
        {socials.map((social) => (
          <li key={social.id}>
            {social.logo}<b>{social.name}</b> — {social.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialMedia;