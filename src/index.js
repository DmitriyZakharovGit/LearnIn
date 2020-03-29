import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

const appNode = (
	<StrictMode>
		<App />
	</StrictMode>
);

ReactDOM.render(appNode, document.getElementById('root'));
serviceWorker.unregister();
