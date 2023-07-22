import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 w-10/12 mx-auto gap-5 mb-10 mt-5">
      {/* qus 1 */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is an access token ?</h2>
          <p>
            An <span className="text-rose-500">access token </span>is like a
            digital key that lets you enter a website or use an app. You get
            this key when you sign in, and you have to show it whenever you want
            to do something on that website or app. It's limited and has an
            expiration time to stay safe
          </p>
        </div>
      </div>
      {/* qus 2 */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is an refresh token?.</h2>
          <p>
            A <span className="text-rose-500"> refresh token </span>
            token is like a master key that helps you get a new access key when
            the old one expires. So, instead of logging in again, you can use
            this master key to get a fresh access key without any hassle. The
            master key lasts longer and is more reliable than the access key.
          </p>
        </div>
      </div>
      {/* qus 3 */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Comparing SQL and NoSQL databases ??</h2>
          <p>
            <span className="text-rose-500"> SQL</span> databases are like
            organized filing cabinets with tables, rows, and columns. They use a
            structured language (SQL) to manage and retrieve data. Good for
            complex queries and ensuring data consistency, but less flexible for
            changing data models.
          </p>
          <p>
            <span className="text-rose-500">NoSQL</span> databases are like big
            bags where you can throw anything in. They use various data models
            like key-value, document, or graph to store data. Great for handling
            large amounts of unstructured or diverse data, but may not provide
            the same level of consistency as SQL databases
          </p>
        </div>
      </div>
      {/* qus 4 */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">What is express js?.</h2>
          <p>
            <span className="text-rose-500"> Express.js </span>
            is a tool that helps developers build web applications and APIs
            using JavaScript. It makes creating web services easier and faster.
          </p>
        </div>
      </div>
      {/*   qus 5 */}
      <div className="card w-full bg-base-100 shadow-xl">
        {/* <div className="card-body">
          <h2 className="card-title">What is Nest JS??</h2>
          <p>
            In MongoDB, <span className="text-rose-500">"aggregate"</span>
            is a special function that lets you do advanced operations on your
            data. You can group, filter, and calculate things from your
            database. It works in stages, where each stage does a specific task,
            and the data flows through these stages to get the final result.
            It's like a powerful tool for analyzing and summarizing data in
            MongoDB.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
