import React from 'react';
import RandomColor from '../../container/RandomColor';

export default function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <RandomColor />
        <RandomColor />
        <RandomColor />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <RandomColor />
        <RandomColor />
        <RandomColor />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }} >
        <RandomColor />
        <RandomColor />
        <RandomColor />
      </div>
    </>
  )
}
