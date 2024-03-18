import { blogs } from "../constants";

const Marketing = () => {
  return (
    <section className="marketing mb">
      <div className="container">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
        <div className="grid-3">
          {blogs.map((blog) => (
            <div key={blog.label} className="blog-box">
              <img src={blog.img} alt="blog image" />
              <div className="blog-stat">
                <h2>{blog.label}</h2>
                <h3>
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketing;
