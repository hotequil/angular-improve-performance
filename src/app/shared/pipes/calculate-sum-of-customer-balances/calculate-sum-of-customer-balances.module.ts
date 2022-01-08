import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateSumOfCustomerBalancesPipe } from './calculate-sum-of-customer-balances.pipe';

@NgModule({
    declarations: [CalculateSumOfCustomerBalancesPipe],
    imports: [CommonModule],
    exports: [CalculateSumOfCustomerBalancesPipe]
})
export class CalculateSumOfCustomerBalancesModule{}
