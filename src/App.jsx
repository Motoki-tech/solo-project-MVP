import React, { useState } from "react";
import "./App.css";

import Checkbox from "./components/Checkbox";
import AllString from "./components/AllStrings";

function App() {
  const [cullentView, setCurrentView] = useState("All");
  const [checkString, setCheckString] = useState();

  let selectArea;

  return (
    <div className='App'>
      <h1 className='Title'>Let's find your favorite Strings!</h1>
      <img src='https://www.shimamura.co.jp/shop/nagoya/wp-content/uploads/sites/50/2018/02/20180227-20170928-image9-1.jpeg' />
      <div>
        <Checkbox
          setCheckString={setCheckString}
          setCurrentView={setCurrentView}
        />
        <AllString />
      </div>
    </div>
  );
}

export default App;
