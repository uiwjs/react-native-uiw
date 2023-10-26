import React, { Fragment } from 'react';
import Footer from '../Footer';

export default function NotFound() {
  return (
    <Fragment>
      <div
        style={{
          minHeight: 230,
          fontSize: 28,
          fontWeight: 'bold',
          color: '#c1c1c1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Not Found
      </div>
      <Footer />
    </Fragment>
  );
}
