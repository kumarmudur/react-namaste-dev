// const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading); 

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag!</h1>
    </div>
</div> */}

import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
    "div",
    { id: 'parent'},
    React.createElement(
        "div",
        { id: 'child' },
        [
            React.createElement("h1", {}, "I'm h1 tag!"),
            React.createElement("h1", {}, "I'm h2 tag!")
        ]
    )
);

// React Element
const jsxHeading = <h1>Namaste React using JSX</h1>;

// React functional component
const Heading = () => {
    return (
      <div className="container">
        <h1>Namaste React functional component!</h1>
      </div>
    );
}

const Heading2 = () => {
    return <h1>Namaste React functional component!</h1>;
}

const Heading3 = () => <h1 className="heading">Namaste React functional component!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Heading);
