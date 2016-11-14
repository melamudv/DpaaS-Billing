import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AmazonComponent } from './amazon/amazon.component';
import { AzureComponent } from './azure/azure.component';
const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/amazon', component: AmazonComponent },
  { path: 'dashboard/azure', component: AzureComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
