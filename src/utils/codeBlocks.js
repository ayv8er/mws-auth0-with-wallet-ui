export const index = `import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider>
        <App />
    </Auth0Provider>
);`;

export const logInHeader = `import { useAuth0 } from "@auth0/auth0-react";

function Header() {
    const { loginWithRedirect } = useAuth0();
    
    return (
        <header>
            <div onClick={loginWithRedirect}>
                Login
            </div>
        </header>
    );
}`;

export const magic = `import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";

export const magic = new Magic(
  "{YOUR_MAGIC_PUBLISHABLE_API_KEY}",
    {    
        network: "goerli",
        extensions: [new OpenIdExtension()],
    }
);
`;

export const app = `import { useCallback, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { magic } from "./libs/magic";

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
    
    return (...);
}
`;

export const logOutHeader = `import { useAuth0 } from "@auth0/auth0-react";
import { magic } from "../libs/magic";

function Header() {
    const { logout } = useAuth0();

    const showUI = async () => {
        await magic.wallet.showUI().on("disconnect", () => {
            logout();
        });
    };
    
    return (
        <header>
            <div onClick={showUI}>
                Wallet
            </div>
        </header>
    );
}`;
