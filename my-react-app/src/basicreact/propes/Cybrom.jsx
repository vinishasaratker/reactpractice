import React from 'react'
import College from './College'


const date="3/2/2026";
const fullname="VINISHA SARATKER "
const subject="PHP"

const Cybrom = () => {
  return (
    <div>
      <h1>Cybrom Classes</h1>
 
      <College name="UIT-RGPV BHOPAL " date={date} fullname={fullname} subject={subject}/>
    </div>
  )
}

export default Cybrom
