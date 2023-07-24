import React, { useState } from 'react';

const Teacher = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    marks: '',
  });
  const [editIndex, setEditIndex] = useState(-1); // Track the index of the student being edited

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleAddStudent = () => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    setNewStudent({
      name: '',
      marks: '',
    });
  };

  const handleDeleteStudent = (index) => {
    setStudents((prevStudents) => prevStudents.filter((_, i) => i !== index));
  };

  const handleEditStudent = (index) => {
    setEditIndex(index);
    setNewStudent({
      name: students[index].name,
      marks: students[index].marks,
    });
  };

  const handleUpdateStudent = () => {
    if (editIndex !== -1) {
      setStudents((prevStudents) => {
        const updatedStudents = [...prevStudents];
        updatedStudents[editIndex] = newStudent;
        return updatedStudents;
      });
      setEditIndex(-1);
      setNewStudent({
        name: '',
        marks: '',
      });
    }
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="marks"
          placeholder="Student Marks"
          value={newStudent.marks}
          onChange={handleInputChange}
        />
        {editIndex === -1 ? (
          <button onClick={handleAddStudent}>Add Student</button>
        ) : (
          <button onClick={handleUpdateStudent}>Update Student</button>
        )}
      </div>
      <div>
        <h3>Student Records:</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Actions</th>
              {/* 
              1. Student Name
              2. Total Marks
              3. Percentage
              4. Obtained
              5. Date 
              */}
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>
                  <button onClick={() => handleEditStudent(index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteStudent(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teacher;
