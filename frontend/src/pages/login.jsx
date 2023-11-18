import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [sendData, setSendData] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (sendData) {
      const fetchData = async () => {
        try {
          const response = await axios.post("http://localhost:5555", formData);
          const data = response.data;
          if (data === "successfulLogin") {
            console.log("success");
            navigate("/home");
          } else {
            console.log("unsuccessfull");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
      setSendData(false);
    }
  }, [sendData, formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSendData(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" name="email" onChange={handleInputChange}></input>
      <label>Password</label>
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
