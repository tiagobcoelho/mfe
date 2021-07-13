import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import StepsForm from './StepsForm';
// Mount function to start up the app

const mount = (el) => {
  ReactDOM.render(
    <App />,
    el  
  );
};

// if we are in development and in isolation,
// call mount immediately

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#marketing-dev-root');

  if(devRoot) {
    mount(devRoot);
  };
};


// We are running through container
// and we should export the mount function

export { mount };