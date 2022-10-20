import React from "react";
import { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type== "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);
  return (
    <div className="bg-purple-500 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center">Blog Posts</h2>
        <h3 className="text-lg text-purple-300 flex justify-center mb-12">Welcome to my blog post page!</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts &&
            allPosts.map((post, index) => (
              <Link to={"/" + post.slug.current} key={post.slug.current}>
                <span className="block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-yellow-400" key={index}>
                  <img className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt="main hero image for blog post"
                  />
                  <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                    <h2 className="text-black text-lg font-bold px-3 py-4 bg-purple-500 bg-opacity-75 rounded">{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
