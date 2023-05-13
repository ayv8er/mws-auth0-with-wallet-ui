import { CodeBlock, atomOneDark } from "react-code-blocks";
import { index, logInHeader, magic } from "../utils/codeBlocks";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing">
        <h2>
          React App (MWS + Auth0 + Wallet UI){" - "}
          <a
            href="https://github.com/ayv8er/mws-auth0-with-wallet-ui"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </h2>
        <ul>
          <li>
            Wrap application in Auth0Provider{" - "}
            <a
              href="https://auth0.com/docs/libraries/auth0-react"
              target="_blank"
              rel="noreferrer"
            >
              Auth0 React SDK docs
            </a>
          </li>
          <br />
          <CodeBlock
            className="code-block"
            text={index}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>
            Instantiate{" "}
            <a
              href="https://magic.link/docs/auth/api-reference/client-side-sdks/web#constructor-NaN"
              target="_blank"
              rel="noreferrer"
            >
              Magic
            </a>{" "}
            with OIDC extension
          </li>
          <br />
          <CodeBlock text={magic} language="javascript" theme={atomOneDark} />
          <br />
          <li>Header - Start Auth0 loginWithRedirect flow</li>
          <br />
          <CodeBlock
            text={logInHeader}
            language="javascript"
            theme={atomOneDark}
          />
        </ul>
      </div>
    </div>
  );
}

export default Landing;
