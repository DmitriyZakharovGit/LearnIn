import React from 'react';
import {
	Grid,
	Card,
	CardContent,
	Container,
	Typography,
	Table,
	TableRow,
	TableBody,
	TableCell,
	TableHead,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { AttachmentFilesList } from '../organisms/workSpace';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	card: {
		marginBottom: theme.spacing(1),
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
				<Grid item xs={7}>
					<Card className={classes.card}>
						<CardContent>
							<Typography className={classes.title}>
								Рабочая область
							</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={5}>
					<Card className={classes.card}>
						<CardContent>
							<AttachmentFilesList />
						</CardContent>
					</Card>

					<Card className={classes.card}>
						<CardContent>
							<Typography className={classes.title}>
								Ссылки
							</Typography>

							<Table>
								<TableHead>
									<TableRow>
										<TableCell>№</TableCell>
										<TableCell align="right">Ссылка</TableCell>
										<TableCell align="right">Описание</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									<TableRow>
										<TableCell align="right">1</TableCell>
										<TableCell align="right">https://google.com</TableCell>
										<TableCell align="right">Источник для поиска геоданных</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
