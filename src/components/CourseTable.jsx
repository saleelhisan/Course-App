// @import '@mui/icons-material';


import './CourseTable.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState,useEffect } from 'react';

const CourseTable = () => {
      const [courses, setCourses] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:5000/courses")
          .then(res => res.json())
          .then(data => setCourses(data));
      }, []);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Course name</TableCell>
            <TableCell className="tableCell">Start Date</TableCell>
            <TableCell className="tableCell">Lesson Completed</TableCell>
            <TableCell className="tableCell">Duration</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="tableCell">{course.name}</TableCell>
              <TableCell className="tableCell">{course.startDate}
              </TableCell>
              <TableCell className="tableCell">{course.lessonCompleted}</TableCell>
              <TableCell className="tableCell">{course.duration}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;
