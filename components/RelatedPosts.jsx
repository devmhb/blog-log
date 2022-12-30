import React, { useEffect, useState } from "react";
import { getRelatedPosts } from "../service";
import { RelatedCard } from "../components";

const RelatedPosts = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    getRelatedPosts(categories, slug).then((data) => setRelatedPosts(data));
  }, [slug, categories]);
  return (
    <>
      {relatedPosts.map((post) => (
        <RelatedCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default RelatedPosts;
