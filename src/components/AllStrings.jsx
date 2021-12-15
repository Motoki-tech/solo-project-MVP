import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllPhotos(props) {
  const getStringList = async () => {
    try {
      const response = await axios.get("/api/string");
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStringList();
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>Moe</td>
          <td>mary@example.com</td>
        </tr>
        <tr>
          <td>July</td>
          <td>Dooley</td>
          <td>july@example.com</td>
        </tr> */}
      </tbody>
    </table>
  );
}