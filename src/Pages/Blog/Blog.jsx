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
     
    </div>
  );
};

export default Blog;
