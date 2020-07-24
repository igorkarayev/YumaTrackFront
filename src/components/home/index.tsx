import React from 'react'
import Calendar from './calendar/index';
import WorkingHours from './working-hours/index';
import Users from './users/index';


const Home = (): any =>{
  return <div className='home_wrapper'>
   <Calendar/>
   <WorkingHours/>
   <Users/>
  </div>
}

export default Home