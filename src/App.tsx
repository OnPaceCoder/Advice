import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(JSON.stringify(res.data.slip.advice));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const callMe = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(JSON.stringify(res.data.slip.advice));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  callMe();
  return (
    <div className="App">
      {advice} <button onClick={() => callMe()}>Change</button>
    </div>
  );
}

export default App;
