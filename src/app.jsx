import React from 'react';
import ReactDOM from 'react-dom';

var appWrapper = document.getElementById('app');

function App(props) {
    return <div><h1>hello world</h1></div>
}

ReactDOM.render(<App />, appWrapper)