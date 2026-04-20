import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Performance Engineering Lead with 5.6 years of hands-on experience across insurance, banking,
          and retail domains. I specialize in AI/LLM performance observability, enterprise load testing,
          and Site Reliability Engineering. At PwC India, I pioneered an LLM chatbot performance testing
          framework using LangSmith and WebSocket protocol — cutting P99 latency from 7s to 1.8s and
          achieving 71% token cost reduction. My tools of trade span JMeter, Dynatrace, Datadog, AWS,
          Kubernetes, and Groovy scripting, with a growing edge in AI-assisted performance engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
