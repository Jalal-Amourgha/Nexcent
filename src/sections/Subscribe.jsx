import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <h1>Subscribe</h1>
        <p>Subscribe to our newsletter to stay updates every moment</p>
        <div className="input-box">
          <input type="text" placeholder="Enter a valid email address" />
          <Button label="Submit" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
