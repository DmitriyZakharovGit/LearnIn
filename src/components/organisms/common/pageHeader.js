import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
	List,
	AppBar,
	Drawer,
	Toolbar,
	Divider,
	ListItem,
	Typography,
	IconButton,
	CssBaseline,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { routes } from '../../../constants';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},
	toolbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar,
	},
}));

export default function ({ Content }) {
	const [open, setOpen] = React.useState(false);

	const classes = useStyles();

	const changeMenuHandler = () => setOpen(!open);

	return (
		<div className={classes.root}>
			<CssBaseline />

			<AppBar
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={changeMenuHandler}
						className={clsx(classes.menuButton, {
							[classes.hide]: open,
						})}
					>
						<MenuIcon />
					</IconButton>

					<Typography variant="h6" noWrap>
						Learn In
					</Typography>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				})}
				classes={{
					paper: clsx({
						[classes.drawerOpen]: open,
						[classes.drawerClose]: !open,
					}),
				}}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={changeMenuHandler}>
						<ChevronRightIcon />
					</IconButton>
				</div>

				<Divider />

				<List>
					{routes.map((route) => (
						<ListItem button key={route.url} {...{ component: NavLink, to: route.url }}>
							<ListItemIcon>{route.icon}</ListItemIcon>
							<ListItemText
								primary={route.name}
								className={clsx(classes.appBar, {
									[classes.hide]: !open,
								})}
							/>
						</ListItem>
					))}
				</List>
			</Drawer>

			<Content />
		</div>
	);
}
