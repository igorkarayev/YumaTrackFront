import React, { useState } from 'react'
import styles from './styles.module.scss';

const OurCalendar = (): any => {
  const [date, setNewDate] = useState(new Date())

  return <div className={styles.calendar_wrapper}>
    <input type='date'/>
    <div>

    </div>
  </div>
}

export default OurCalendar