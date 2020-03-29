import React from 'react';
import { Grid, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		marginTop: theme.spacing(1),
		padding: theme.spacing(3),
		color: theme.palette.text.secondary,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	title: {
		fontSize: 18,
	},
}));

export default function () {
	const classes = useStyles();

	return (
		<Container>
			<Grid container spacing={2} className={classes.content}>
				<Grid item xs={8}>
					<Card>
						<CardContent>
							<Typography className={classes.title} color="success">
								Рабочая область
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={4}>
					<Paper className={classes.paper}>
						1
					</Paper>

					<Paper className={classes.paper}>
						1
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
