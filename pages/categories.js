import Head from 'next/head';
import React from 'react';

export default function Categories() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Rubriques</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <span>Categories</span>
    </div>
  );
}
