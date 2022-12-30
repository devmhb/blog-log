import Link from "next/link";
import React from "react";

const RelatedCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <p>{post.title}</p>
    </Link>
  );
};

export default RelatedCard;
