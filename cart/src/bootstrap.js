import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
   return (
     <div>Hello Cart !!!!</div>
   )
};

const mount = (element) => {
  ReactDOM.render(<App />, element);
}

// Context / Scenario 1
// We are running this file in development in isolation
// We are using our local index.html file
// which DEFENITELY has an element with id of 'products-root'
// We want to immediately render our app into that element
if(process.env.NODE_ENV === "development") {
   const element = document.getElementById('cart-root');

   if(element) {
      mount(element);
   }
}

// Context / Scenario 2
// We are running this file in development or Production
// through the CONTAINER app 
// NO Guarntee that an element with an id of 'products-root' exists
// we do not want to try immediately render the app

export { mount };

