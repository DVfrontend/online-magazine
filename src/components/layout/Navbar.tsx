"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar.module.scss";
import Image from "next/image";

type Nav = {
  id: number;
  title: string;
  path: string;
};

const nav: Nav[] = [
  { id: 1, title: "Дом", path: "/" },
  { id: 2, title: "Корзина", path: "/cart" },
  { id: 3, title: "Про меня", path: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bg-neutral-900 top-0 right-0 left-0 text-white p-3">
      <div className="flex items-center justify-between">
        <Link href={"./"}>
          <Image
            src={"/icons/icon.png"}
            alt="logo"
            width={40}
            height={40}
            className="rounded-md shdaow-xl/50 shadow-white"
          />
        </Link>

        <div className="flex space-x-3 text-right">
          {nav.map(({ id, title, path }) => (
            <Link key={id} href={path} className="text-right">
              <span
                className={`${
                  pathname === path ? styles.active : undefined
                } ease-in duration-300 hover:shadow-white hover:shadow-2xl hover:border-b mx-3 py-1 hover:border-b-white hover:shadow-b border-white hover:shadow-[0_2px_0_0_rgb(255,255,255)] transition-shadow`}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
