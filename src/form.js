import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

function form(params) {
    return <p>form page {params.text}</p>
}

ReactDOM.render(<form text="lldlldldldl"/>, document.getElementById("form"))