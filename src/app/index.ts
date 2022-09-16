import { Route } from '@angular/router';

//Lazy loaded routes
export const APP_ROUTES: Route[] = [
	{
		path: 'home',
		loadComponent: () =>
			import('./components/home/home.component').then((mod) => mod.HomeComponent),
		providers: [
			/*Place Services Here per route*/
		],
	},
];
