import React from 'react';
import Post from 'pages/Post';
import { Link, Route } from 'react-router-dom';

interface PostsProps {
  match: {
    url: any;
  };
}

function Posts({ match }: PostsProps) {
  return (
    <>
      <h1>Post List</h1>
      <br />
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Post #1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Post #2</Link>
        </li>
        <li>
          <Link to={`${match.url}/3`}>Post #3</Link>
        </li>
      </ul>
      <br />
      <Route exact path={match.url} render={() => <p>포스토를 선택하세요</p>} />
      <Route exact path={`${match.url}/:id`} component={Post} />
    </>
  );
}

export default Posts;
