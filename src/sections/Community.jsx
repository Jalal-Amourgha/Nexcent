import { community } from "../constants";

const Community = () => {
  return (
    <section className="community mb">
      <div className="container">
        <h1 className="community-title">
          Manage your entire community
          <br />
          in a single system
        </h1>
        <p>Who is Nextcent suitable for?</p>
        <div className="grid-3">
          {community.map((box) => (
            <div key={box.label} className="community-box">
              <div className="community-box-img">
                <img src={box.icon} alt={box.label} />
              </div>
              <h1>{box.label}</h1>
              <p>{box.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
