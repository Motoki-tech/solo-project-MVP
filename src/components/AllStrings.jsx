import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllPhotos(props) {
  const [lists, setList] = useState([]);

  const getStringList = async () => {
    try {
      const response = await axios.get("/api/string");

      setList(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStringList();
  }, []);

  //   console.log(list);
  return (
    <table className='table' align='center'>
      <tr>
        <th>Name</th>
        <th>gage</th>
      </tr>
      {lists.map((list) => (
        <tr>
          <td>{list.string_name}</td>
          <td>{list.string_gage}</td>
          <a href='https://www.youtube.com/watch?v=yZyuaYj8JoI'>Smaple</a>
        </tr>
      ))}
    </table>
  );
}
