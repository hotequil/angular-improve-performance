import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./core/home/home.module").then(module => module.HomeModule)
    },
    {
        path: 'customers',
        loadChildren: () => import("./modules/customers/customers.module").then(module => module.CustomersModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
