import { useAuth0 } from "@auth0/auth0-react";
import { magic } from "../libs/magic";
import "./Header.css";

function Header() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const showUI = async () => {
    await magic.wallet.showUI().on("disconnect", () => {
      logout();
    });
  };

  return (
    <div className="nav-container">
      <header className="nav-bar">
        <a
          className="nav-logo"
          href="https://magic.link/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/magic-logo.png"
            alt="magic logo"
            width="130px"
            height="50px"
          />
        </a>
        {isAuthenticated ? (
          <div className="nav-login" onClick={showUI}>
            Wallet
          </div>
        ) : (
          <div className="nav-login" onClick={loginWithRedirect}>
            Login
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
