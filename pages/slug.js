// pages/[slug].js

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://foodready.ai/wp-json/wp/v2/posts?slug=${slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        if (data.length > 0) {
          const post = data[0];
          setPost(post);
        } else {
          throw new Error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      {post.featuredImageUrl && (
        <img src={post.featuredImageUrl} alt={post.title.rendered} />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  );
};

export default BlogDetails;
