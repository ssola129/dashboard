import React from 'react';
import { Link } from 'react-router-dom';

interface PostProps {
  match: {
    params: {
      id?: any;
    };
  };
}

function Post({ match }: PostProps) {
  return (
    <>
      <h2>Post {match.params?.id}</h2>
      <br />
      <Link to="/">Back</Link>
      <br />
      <br />
    </>
  );
}

export default Post;
