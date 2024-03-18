import { unlockImg } from "../assets/images";
import Button from "../components/Button";

const Unlock = () => {
  return (
    <section className="unlock mb">
      <div className="container">
        <div className="flex">
          <div>
            <img src={unlockImg} alt="unlock img" />
          </div>
          <div>
            <h1>How to design your site footer like we did </h1>
            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <Button label="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
