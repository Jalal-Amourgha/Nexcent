import { heroImg } from "../assets/images";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="home" className="home mb">
      <div className="container">
        <div className="grid-2 home-boxes">
          <div>
            <h1>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button label="Register" />
          </div>
          <div className="img-border">
            <img src={heroImg} alt="Home image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
