import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './blogDetailStyles.module.css'; // Adjust the path based on your directory structure
import Link from 'next/link';

function stripHtmlTags(htmlString) {
  return htmlString.replace(/<[^>]*>?/gm, '');
}

function BlogDetail({ post }) {
    const [featuredImageUrl, setFeaturedImageUrl] = useState('');

    useEffect(() => {
        const fetchFeaturedImage = async () => {
            if (post.featured_media) {
                try {
                    const response = await fetch(`https://foodready.ai/wp-json/wp/v2/media/${post.featured_media}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch featured image');
                    }
                    const mediaData = await response.json();
                    setFeaturedImageUrl(mediaData.guid.rendered);
                } catch (error) {
                    console.error('Error fetching featured image:', error);
                }
            }
        };

        fetchFeaturedImage();
    }, [post.featured_media]);

    // Strip HTML tags from the description
    const strippedDescription = stripHtmlTags(post.excerpt.rendered);

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                {/* Use stripped description */}
                <meta name="description" content={strippedDescription} />
                {/* Additional meta tags */}
                <meta property="og:title" content={post.title.rendered} />
                {/* Use stripped description for og:description */}
                <meta property="og:description" content={strippedDescription} />
                <meta property="og:image" content={featuredImageUrl} />
                {/* Other SEO meta tags */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <article className={styles['blog-detail']}>
                <header>
                    <h1>{post.title.rendered}</h1>
                    <p className={styles['blog-date']}>{post.date}</p>
                    {featuredImageUrl && (
                        <img src={featuredImageUrl} alt={post.title.rendered} className={styles['blog-image']} />
                    )}
                </header>
                <div className={styles['blog-content']} dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
            </article>
        </div>
    );
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await fetch(`https://foodready.ai/wp-json/wp/v2/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    const [post] = await response.json();
    return {
      props: { post }
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      props: { post: null }
    };
  }
}

export default BlogDetail;
