import "./Login.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function Login() {
  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-branding">
          <div className="system-title">
            Supplier Relationship Management Portal
          </div>
        </div>
        <div className="login-info">
          <form className="login-form">
            <div className="login-logo"></div>
            <div className="environment-notice">
              <WarningAmberIcon className="input-icon-warning" />
              <div>UAT</div>
            </div>
            <div className="login-input-group">
              <div className="login-input">
                <AccountCircleOutlinedIcon className="input-icon-normal" />
                <div className="input-text">
                  <input type="text"></input>
                </div>
              </div>
              <div className="login-input">
                <HttpsOutlinedIcon className="input-icon-normal" />
                <div className="input-text">
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div>
              <button className="login-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
