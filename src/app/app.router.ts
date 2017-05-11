import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { AdminComponent } from './admin/admin.component';

export const router: Routes = [
    {
		path: '',
		redirectTo: '/about',
		pathMatch: 'full'
	},
    {
		path: 'about',
		component: AboutComponent
	},
    {
		path: 'help',
		component: HelpComponent
	},
    {
		path: 'admin',
		component: AdminComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
