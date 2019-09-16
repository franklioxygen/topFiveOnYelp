import React from "react";
// asyncReactor is a package fetch data asynchronous in nextjs
import { asyncReactor } from "async-reactor";

function Loader() {
  return <a>Loading ...</a>;
}

async function AsyncPosts({ shopId }) {
  const data = await fetch("http://localhost:8080/reviews/?id=" + shopId);
  const review = await data.json();

  return (
    <blockquote class="small">
      {review.user.name}: {review.text.slice(0, 80)}...
    </blockquote>
  );
}

export default asyncReactor(AsyncPosts, Loader);
