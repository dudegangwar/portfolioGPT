import React from "react";

const Edustats = () => {
  return (
    <div className="mt-4">
    <h1 className="text-lg pb-2">Anuj's Education Background</h1>
    <table>
      <tr>
        <th>Education Level</th>
        <th>Institution</th>
        <th>Duration</th>
        <th>CGPA/Percentage</th>
      </tr>
      <tr>
        <td>Bachelors in Data Science and Applications</td>
        <td>Indian Institute of Technology, Madras</td>
        <td>Jan 2021 - Present</td>
        <td>7 (CGPA)</td>
      </tr>
      <tr>
        <td>Diploma in Computer Science and Engineering</td>
        <td>Government Polytechnic, Shahjahanpur</td>
        <td>2017 - 2020</td>
        <td>7.5 (CGPA)</td>
      </tr>
      <tr>
        <td>Intermediate</td>
        <td>SV Inter College, Bareilly</td>
        <td>2016 - 2017</td>
        <td>61.4%</td>
      </tr>
      <tr>
        <td>High School</td>
        <td>Sanatan Dharam HSS School, Bareilly</td>
        <td>2014 - 2015</td>
        <td>79%</td>
      </tr>
    </table>
  </div>
  );
};

export default Edustats;
