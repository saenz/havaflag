import React from 'react';

const LoadingIndicator = ({isLoading, error, timedOut}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } 
  else if (timedOut) {
    return <div>Taking a long time...</div>;
  }
  else {
    return null;
  }
};

export default LoadingIndicator;