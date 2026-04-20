import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SAGAR
              <br />
              <span>CHAUDHARY</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Performance &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Engineering</div>
              <div className="landing-h2-2">AI/LLM</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI/LLM</div>
              <div className="landing-h2-info-1">Engineering</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
