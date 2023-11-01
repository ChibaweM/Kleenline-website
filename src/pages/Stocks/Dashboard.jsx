import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import "../../App.css";
import { useNavigate } from "react-router-dom";


export default () => {

  const [user, setUser] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //function test whether it's her note
    e.preventDefault();
    if(user==="Ngandwekalonga10@gmail.com"){
      navigate("/Responsibilities")
    }else(
      setErrMsg("Wrong email address sorry")
    )
  };

  return (
    <div className="App">
      <div>
      <h1>Welcome Ngandwe</h1>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <form onSubmit={(e)=> handleSubmit(e)}>
      <p>Please confirm your identity with your email address</p>
      <div>
        <input
          type="Email"
          autoComplete="on"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          name="user"
        />
      </div>
      <div className="card">
        <button>
          Next
        </button>
      </div>
      </form>
      <p
            className={errMsg ? "errmsg" : "offscreen"}
          >
            {errMsg}
          </p>
      <p className="read-the-docs">
        Your email address is only used for verification purposes
      </p>
      <p className="read-the-docs">
        Like your heart, Your email is safe with me
      </p>
    </div>
  );
};