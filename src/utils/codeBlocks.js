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
  <MAGIC_PUBLISHABLE_API_KEY>,
  {
    extensions: [new OpenIdExtension()],
  }
);
`;

export const app = `function App() {
    const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
          connectWallet();
        }
    }, [user]);
    
    const connectWallet = async () => {
        const token = await getIdTokenClaims();
        await magic.openid.loginWithOIDC({
            jwt: token.__raw,
            providerId: process.env.REACT_APP_MAGIC_PROVIDER_ID,
        });
    };
    
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
