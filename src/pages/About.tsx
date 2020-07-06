import React from 'react';
import { Link } from 'react-router-dom';

interface AboutProps {
  match: {
    params: {
      id?: any;
      name?: any;
    };
  };
}

function About({ match }: AboutProps) {
  return (
    <>
      <h1>
        About {match.params?.name} {match.params?.id}
      </h1>
      <br />
      <Link to="/">Back</Link>
      <br />
      <br />
    </>
  );
}

export default About;
