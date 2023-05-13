import { useCallback, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { magic } from "./libs/magic";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Protected from "./components/Protected";
import "./App.css";

function App() {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const connectWallet = useCallback(async () => {
    const token = await getIdTokenClaims();
    await magic.openid.loginWithOIDC({
      jwt: token.__raw,
      providerId: process.env.REACT_APP_MAGIC_PROVIDER_ID,
    });
  }, [getIdTokenClaims]);

  useEffect(() => {
    if (isAuthenticated) {
      connectWallet();
    }
  }, [connectWallet, isAuthenticated]);

  return (
    <div className="App">
      <Header />
      {isAuthenticated ? <Protected /> : <Landing />}
    </div>
  );
}

export default App;
