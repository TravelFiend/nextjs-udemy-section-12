import Head from 'next/head';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage({ posts }) {
  return (
    <>
    <Head>
      <title>Griz blog</title>
      <meta name='description' content='I post about programming and web development.' />
    </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
