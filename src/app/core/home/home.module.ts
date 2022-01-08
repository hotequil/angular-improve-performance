import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { CalculateSumOfCustomerBalancesModule } from "../../shared/pipes/calculate-sum-of-customer-balances/calculate-sum-of-customer-balances.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CalculateSumOfCustomerBalancesModule
    ]
})
export class HomeModule{}
