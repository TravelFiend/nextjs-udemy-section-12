import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts ? posts.map(post => (
        <PostItem key={post.slug} post={post} />
      )): null}
    </ul>
  );
};

export default PostsGrid;
