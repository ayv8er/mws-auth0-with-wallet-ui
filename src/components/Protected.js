import { CodeBlock, atomOneDark } from "react-code-blocks";
import { app, logOutHeader } from "../utils/codeBlocks";
import "./Protected.css";

function Protected() {
  return (
    <div className="protected-container">
      <div className="protected">
        <h2>React App (MWS + Auth0 + Wallet UI)</h2>
        <p>Post Login</p>
        <ul>
          <li>Provision Magic wallet upon successful Auth0 login</li>
          <br />
          <CodeBlock text={app} language="javascript" theme={atomOneDark} />
          <br />
          <li>Header - Render Magic Wallet UI and display Auth0 logout</li>
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
