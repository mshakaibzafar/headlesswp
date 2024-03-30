// pages/blog.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import './blogStyles.css'; // Import CSS file
// pages/index.js

import Head from 'next/head'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://foodready.ai/wp-json/wp/v2/posts?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();

        // Fetch featured image URL for each post
        const postsWithImages = await Promise.all(data.map(async (post) => {
          const featuredMediaId = post.featured_media;
          if (featuredMediaId) {
            const mediaResponse = await fetch(`https://foodready.ai/wp-json/wp/v2/media/${featuredMediaId}`);
            if (mediaResponse.ok) {
              const mediaData = await mediaResponse.json();
              const featuredImageUrl = mediaData.guid.rendered;
              return { ...post, featuredImageUrl };
            }
          }
          return post;
        }));

        setPosts(postsWithImages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [currentPage]); // Trigger fetchPosts whenever currentPage changes

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="blog-container">
      <h1>Top Title - Blogs</h1>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-card">
            <Link href={`/blog/${post.slug}`}> {/* Use Link instead of anchor tag */}
              <a>
                {post.featuredImageUrl && (
                  <img
                    src={post.featuredImageUrl}
                    alt={post.title.rendered}
                    className="blog-image"
                  />
                )}
                <h2 className="blog-title">{post.title.rendered}</h2>
              </a>
            </Link>
            <p className="blog-date">{post.date}</p>
            <p className="blog-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Blog;
