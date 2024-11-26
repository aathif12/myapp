import React, { useState } from "react";

function Students() {
  const [studentData, setStudentData] = useState({
    regno: "",
    name: "",
    course: "",
    gpa: "",
  })
  const setData = (e) => {
    const {name, value}= e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [students,setStudents] = 
  setStudents = (prevData)=>[
    ...prevData,
    studentData
  ]
    
    

  return (
    <>
    <table>
      <tr>
        <td align="right">Registration Number:</td>
        <td align="left">
          <input type="text" name="regno" value={studentData.regno} onChange={setData} />
        </td>
      </tr>
      <tr>
        <td align="right">Name:</td>
        <td align="left">
          <input type="text" name="name" value={studentData.name} onChange={setData} />
        </td>
      </tr>
      <tr>
        <td align="right">Course</td>
        <td align="left">
          <input type="text" name="course" value={studentData.course} onChange={setData} />
        </td>
      </tr>
      <tr>
        <td align="right">GPA</td>
        <td align="left">
          <input type="number" name="gpa" value={studentData.gpa}  onChange={setData}/>
        </td>
      </tr>
      <tr>
        <td>
            <tr>
                <button typr= "" onClick={onAdd}> Students</button>
            </tr>
        </td>
      </tr>
    </table>
    <p>
        {studentData.regno}
        {studentData.name}
        {studentData.course}
        {studentData.gpa}
    </p>
    </>
  );
}

export default Students;
