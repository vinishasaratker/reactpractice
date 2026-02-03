import React from 'react'

const College = (propes) => {
  // destructuring const colllege=({name})
  return (
    <div>
    
      <h1>My College Name is : {propes.name}</h1>

      <h2>my fullname is : {propes.fullname}</h2>

      <h2>  date is : {propes.date}</h2>

      <h2>  subject is: {propes.subject}</h2>
      
      {/* // or yha bhi {name} likhna honga  */}


    </div>
  )
}

export default College
