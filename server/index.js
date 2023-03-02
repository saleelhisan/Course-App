const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // To allow cross-origin requests

const courses = [
  { id: 1, name: 'Basic Algorithm', startDate: "27 jan 2023", lessonCompleted: "10/25 (48%)", duration:"14h 38m 56s" },
  { id: 2, name: 'Web Development', startDate: '27 jan 2023', lessonCompleted: "40/45 (97%)" , duration:"36h 30m 00s" },
  { id: 3, name: 'Basic data science', startDate: '27 jan 2023', lessonCompleted: "9/37 (40%)" , duration:"37h 00m 00s" },
  { id: 4, name: 'UI/UX Design', startDate: '27 jan 2023', lessonCompleted: "26/32 (84%)" , duration:"16h 40m 50s" },
  { id: 5, name: 'Project Management', startDate: '27 jan 2023', lessonCompleted: "14/19 (89%)" , duration:"13h 20m 00s" },
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
