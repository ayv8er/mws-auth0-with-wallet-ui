import { CodeBlock, atomOneDark } from "react-code-blocks";
import { app, logOutHeader } from "../utils/codeBlocks";
import "./Protected.css";

function Protected() {
  return (
    <div className="protected-container">
      <div className="protected">
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
          <li>Provision Magic wallet in useEffect</li>
          <br />
          <CodeBlock text={app} language="javascript" theme={atomOneDark} />
          <br />
          <li>Header - Render Magic Wallet UI with logout</li>
          <br />
          <CodeBlock
            text={logOutHeader}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
        </ul>
      </div>
    </div>
  );
}

export default Protected;
