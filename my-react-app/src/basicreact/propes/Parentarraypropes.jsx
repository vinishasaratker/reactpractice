import React from 'react';

const Student = [
  { rollno:101, name:"mahima", fees:766 },
  { rollno:102, name:"moti", fees:664 },
  { rollno:104, name:"HENRY", fees:885 },
  { rollno:106, name:"arti", fees:9999 }
];

const Parentarraypropes = () => {
  return (
    <table border="2">
      
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Fees</th>
        </tr>
    
      
        {Student.map((stu) => (
          <tr key={stu.rollno}>
            <td>{stu.rollno}</td>
            <td>{stu.name}</td>
            <td>{stu.fees}</td>
          </tr>
        ))}
     
    </table>
  );
};

export default Parentarraypropes;
