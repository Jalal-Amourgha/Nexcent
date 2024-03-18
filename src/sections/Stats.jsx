import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="stats mb" id="stats">
      <div className="container">
        <div className="grid-2">
          <div>
            <h1 className="stat-title">
              Helping a local
              <br />
              <span>business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className="grid-2">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-box">
                <div className="stat-icon-box">
                  <img src={stat.icon} alt="icon" />
                </div>

                <div>
                  <h1>{stat.value}</h1>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
