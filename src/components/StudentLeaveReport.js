import React, { useEffect } from "react";
import "../style/Teachers.scss";
import "../style/Table.scss";
import { useSelector } from "react-redux";

const StudentLeaveReport = () => {
  const { leaves } = useSelector((state) => state.leaves);
  console.log(leaves);

  return (
    <div className="t-data">
      <div>
        <h1> Leave Reports</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Admission No.</th>
            <th>Full name</th>
            <th>Date</th>
            <th>Reason</th>
            <th> Status</th>
          </tr>
        </thead>
        <tbody>
          {leaves?.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.admissionNo}</td>
                <td>{item.fullname}</td>
                <td>
                  {item.startdate} to {item.enddate}
                </td>
                <td>{item.reason}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentLeaveReport;
