'use client'

import styles from '../ui/buttonBuy.module.scss'
import { toast } from 'sonner'

export default function ButtonBuy() {
  const handleClick = () => {
    toast.success('Отлично, теперь товар в корзине')
  }
  return (
    <>
      <button onClick={handleClick} className={styles.button} >
        КУПИТЬ
      </button>
    </>
  )
}