import React from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

export default function () {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={2} className={classes.content}>
				<Grid item xs={8}>
					<Paper className={classes.paper}>
						1
					</Paper>
				</Grid>

				<Grid item xs={4}>
					<Paper className={classes.paper}>
						1
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
