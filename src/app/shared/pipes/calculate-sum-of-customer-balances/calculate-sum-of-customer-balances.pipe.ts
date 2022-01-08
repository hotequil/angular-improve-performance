import { Pipe, PipeTransform } from '@angular/core';

import { Customer } from "../../types/customer";
import { counter } from "../../decorators/counter";

@Pipe({
    name: 'calculateSumOfCustomerBalances'
})
export class CalculateSumOfCustomerBalancesPipe implements PipeTransform{
    @counter("Pipe")
    transform(customers: Customer[]): number{
        return customers.reduce((accumulator, item) => accumulator + item.balance, 0);
    }
}
