import React from 'react'
import App from './containers/App'
import { render } from "react-snapshot";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
