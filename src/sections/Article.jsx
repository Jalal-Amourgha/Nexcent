import { articalImg } from "../assets/images";

const Article = () => {
  return (
    <section className="article mb">
      <div className="container">
        <div className="flex">
          <div>
            <img src={articalImg} alt="artical img" />
          </div>
          <div>
            <p className="article-paragraph">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3>Tim Smith</h3>
            <p>British Dragon Boat Racing Association</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
