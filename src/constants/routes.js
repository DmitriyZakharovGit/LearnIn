import React from 'react';

import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { MainTemplate } from '../components/templates';

export default [{
	name: 'Главная',
	url: '/',
	component: <MainTemplate />,
	icon: <HomeWorkIcon />,
}, {
	name: 'Личный кабинет',
	url: '/account',
	component: null,
	icon: <AccountBoxIcon />,
}];
