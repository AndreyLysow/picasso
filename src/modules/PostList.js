import React from 'react';
import { useGetPostsQuery } from './postApi';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, Typography } from '@mui/material';

const PostList = () => {
  const { data: posts } = useGetPostsQuery();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post List
      </Typography>
      <List>
        {posts &&
          posts.map((post) => (
            <ListItem key={post.id}>
              <Typography variant="h6">
                {post.id}. {post.title}
              </Typography>
              <Typography>{post.body.slice(0, 50)}...</Typography>
              <Button component={Link} to={`/post/${post.id}`} variant="contained" color="primary">
                View
              </Button>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default PostList;