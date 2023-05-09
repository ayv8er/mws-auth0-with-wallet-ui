import { CodeBlock, atomOneDark } from "react-code-blocks";
import { index, logInHeader, magic } from "../utils/codeBlocks";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing">
        <h2>React App (MWS + Auth0 + Wallet UI)</h2>
        <p>Prior to Login</p>
        <ul>
          <li>
            Wrapped application in the Auth0Provider per{" "}
            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer">
              Auth0 React SDK docs
            </a>{" "}
          </li>
          <br />
          <CodeBlock
            className="code-block"
            text={index}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>Header - Display Auth0 redirect login</li>
          <br />
          <CodeBlock
            text={logInHeader}
            language="javascript"
            theme={atomOneDark}
          />
          <br />
          <li>Instantiate Magic with OIDC extension</li>
          <br />
          <CodeBlock text={magic} language="javascript" theme={atomOneDark} />
        </ul>
      </div>
    </div>
  );
}

export default Landing;
