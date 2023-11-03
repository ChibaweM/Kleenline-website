import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

export default () => {
  return (
    <div>
      <Header></Header>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};
