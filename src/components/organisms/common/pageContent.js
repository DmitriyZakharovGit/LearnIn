import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { routes } from '../../../constants';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function () {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />

			<Switch>
				{routes.map((route) => (
					<Route path={route.url} key={route.url}>
						{route.component}
					</Route>
				))}
			</Switch>
		</main>
	);
}
