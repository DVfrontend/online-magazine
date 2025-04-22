// import styles from './categories.module.scss'
import type { Navigation } from "@/types"
import Link from "next/link"

const nav: Navigation[] = [
  { id: 1, title: "Инструменты", path: '/productPage/tools' },
  { id: 2, title: "Спорт", path: '/productPages/sports' },
  { id: 3, title: "Продукты", path: '/productPages/products' },
  { id: 4, title: "Дети", path: '/productPages/kids' },
  { id: 5, title: "Cемья", path: '/productPages/houseHold' },
  { id: 6, title: "Домашний декор", path: '/productPages/homeDecor' },
  { id: 7, title: "Для дома", path: '/productPages/forHome' },
  { id: 8, title: "Электроника", path: '/productPages/electronics' },
  { id: 9, title: "Одежда", path: '/productPages/clothing' },
  { id: 10, title: "Красота", path: '/productPages/beauty' },
  { id: 11, title: "Аксессуары", path: '/productPages/accessories' },
]

export default function Product() {
  return (
    <div >
      <h1 className="text-3xl font-bold">Категории товаров</h1>
      <ul className="list-decimal">
        {nav.map(({ id, title, path }) => (
          <Link key={id} href={path} className="m-1 p-1">
            <li>
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}