import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="clients mb">
      <div className="container">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="clients-logos">
          {clients.map((client, index) => (
            <div key={index}>
              <img src={client.icon} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
