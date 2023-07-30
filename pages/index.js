import { Button } from 'react-bootstrap';
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <Link href="/about-us">
        Go to About Us Page
      </Link>
    </div>
  );
};

export default Home;