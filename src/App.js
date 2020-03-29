import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Header, Content } from './components/organisms/common';

function App() {
	const theme = createMuiTheme({
		palette: {
			type: 'dark',
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Header Content={Content} />
			</Router>
		</ThemeProvider>
	);
}

export default App;
