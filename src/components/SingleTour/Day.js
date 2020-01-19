import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

import styles from '../../css/day.module.css'

const Day = ({ day, info }) => {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(open => !open)
  }

  return (
    <article className={styles.day}>
      <h4>{day}</h4>
      <button className={styles.btn} onClick={onClick}>
        <FaAngleDown />
      </button>
      {open && <p>{info}</p>}
    </article>
  )
}

export default Day
