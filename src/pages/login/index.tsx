import "./Login.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormState {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formData.username, formData.password);
    navigate("/home");
  }

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-branding">
          <div className="system-title">
            Supplier Relationship Management Portal
          </div>
        </div>
        <div className="login-info">
          <form className="login-form" onSubmit={login}>
            <div className="login-logo"></div>
            <div className="environment-notice">
              <WarningAmberIcon className="input-icon-warning" />
              <div>UAT</div>
            </div>
            <div className="login-input-group">
              <div className="login-input">
                <AccountCircleOutlinedIcon className="input-icon-normal" />
                <div className="input-text">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="login-input">
                <HttpsOutlinedIcon className="input-icon-normal" />
                <div className="input-text">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="login-btn">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
