import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Associate</h4>
                <h5>PwC India · Bangalore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading performance engineering for enterprise AI-powered and cloud-native client
              engagements. Pioneered LLM chatbot performance framework using LangSmith and WebSocket
              protocol. Reduced P99 latency from 7s to 1.8s and achieved 71% token cost reduction
              through prompt compression and max_tokens capping.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Performance Test Engineer</h4>
                <h5>Capgemini · India</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Designed end-to-end performance testing strategy for RLI Insurance Portal covering load,
              stress, spike, and endurance scenarios. Reduced login response time by 25% through JVM
              tuning and microservices-level refactoring. Leveraged AI-assisted tooling with
              Swagger/OpenAPI to accelerate JMeter script generation by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Performance Test Engineer</h4>
                <h5>Tata Consultancy Services · India</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Executed high-volume tests for a US Banking client simulating 50,000+ concurrent users.
              Implemented distributed JMeter execution on AWS EC2 with Auto Scaling, reducing
              infrastructure costs by 30%. Delivered 40% database query performance improvement
              through SQL optimization and composite index tuning. Mentored 4 junior engineers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Performance & Automation Engineer</h4>
                <h5>Wipro · India</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Performed scalability and load testing for OmniStore retail microservices (15+ services)
              on Kubernetes EKS and AKS. Resolved GC pauses, memory leaks, and thread contention via
              deep JVM profiling — reducing production incidents by 45% and achieving 35% JVM heap
              optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
