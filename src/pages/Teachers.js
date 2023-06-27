import React from "react";
import "../style/Teachers.scss";
import "../style/Table.scss";
import { useSelector } from "react-redux";

const Teachers = () => {
  const { users } = useSelector((state) => state.users);
  const filterData = users.filter((item) => item.userType === "T");
  return (
    <div className="t-data">
      <div>
        <h1>Teachers List</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Full name</th>
            <th>Email</th>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          {filterData?.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i+1}</td>
                <td>{item.fullname}</td>
                <td>{item.email}</td>
                <td>{item.qualification}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Teachers;
