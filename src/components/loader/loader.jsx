import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';
import React from 'react';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
