import { spending } from "../assets/images";
import Button from "../components/Button";

const Spending = () => {
  return (
    <section className="spending mb">
      <div className="container">
        <div className="flex">
          <div>
            <img src={spending} alt="spending image" />
          </div>
          <div>
            <h1>
              The unseen of spending three
              <br />
              years at Pixelgrade
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button label="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spending;
