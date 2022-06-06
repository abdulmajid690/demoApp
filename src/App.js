import React from "react";
import Header from "./Component/Header";
import "./App.scss";
import CustomerView from "./Component/CustomerView";
import OtherContent from "./Component/OtherContent";
import MiddleContent from "./Component/MiddleContent";

const App = () => {
  return (
    <div>
      <Header />
      <CustomerView />
      <OtherContent />
      <MiddleContent />
    </div>
  );
};

export default App;
