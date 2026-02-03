import React from 'react'
import Arraypropes from "./Arraypropes";

const Student = [
  { rollno:101, name:"mahima", fees:766 },
  { rollno:102, name:"moti", fees:664 },
  { rollno:104, name:"hurry", fees:885 },
  { rollno:106, name:"arti", fees:9999 }
];

const Parentarraypropes = () => {
  return (
    <div>
      {
      Student.map(stu => (
        <Arraypropes
          key={stu.rollno}
          rno={stu.rollno}
          name={stu.name}
          fs={stu.fees}
        />
      ))}
    </div>
  )
}

export default Parentarraypropes;
