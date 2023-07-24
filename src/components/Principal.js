import React, { useState } from 'react';

const Principal = () => {

    // Mock data for student marks
    const studentMarksData = [
        { name: 'John Doe', marks: 85 },
        { name: 'Jane Smith', marks: 90 },
        { name: 'Michael Johnson', marks: 78 },
        { name: 'Emily Williams', marks: 95 },
        { name: 'William Brown', marks: 88 },
        // Add more students here as needed
    ];
  
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleRequestProof = () => {
    // Implement the logic to request proof of marks for the selected student.
    // For this example, let's just display the student's name and marks in the console.
    if (selectedStudent) {
      console.log(`Requesting proof of marks for ${selectedStudent.name}.`);
      console.log(`${selectedStudent.name} marks: ${selectedStudent.marks}`);
    }
  };

  return (
    <div>
      <h2>Principal Dashboard</h2>
      <div>
        <h3>Student Records:</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentMarksData.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>
                  <button onClick={() => handleSelectStudent(student)}>
                    View Proof
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedStudent && (
        <div>
          <h3>Selected Student:</h3>
          <p>Name: {selectedStudent.name}</p>
          <p>Marks: {selectedStudent.marks}</p>
          <button onClick={handleRequestProof}>Request Proof</button>
        </div>
      )}
    </div>
  );
};

export default Principal;
