import React from 'react'
import Calendar from './calendar/index';
import WorkingHours from './working-hours/index';
import Users from './users/index';
import Tasks from './tasks/index';
import style from './styles.module..scss'


const Home = (): any => {
  return <div className={style.home_wrapper}>
    <Calendar/>
    <Users/>
    <WorkingHours/>
    <Tasks/>
  </div>
}

export default Home