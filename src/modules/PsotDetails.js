import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from './postApi';
import { Button, Typography } from '@mui/material';

const PostDetails = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostByIdQuery(postId);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Post Details
      </Typography>
      {post && (
        <div>
          <Typography variant="h6">{post.title}</Typography>
          <Typography>{post.body}</Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Back
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;