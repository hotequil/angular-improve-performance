import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';

import { Customer } from "../../shared/types/customer";
import { CustomersService } from "../../shared/services/customers.service";
import { counter } from "../../shared/decorators/counter";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
    customers: Customer[] = [];

    private intervalId!: number;

    constructor(private customersService: CustomersService, private changeDetectorRef: ChangeDetectorRef){}

    async ngOnInit(): Promise<void>{
        this.customers = await this.customersService.get();
        this.intervalId = setInterval(() => this.changeDetectorRef.detectChanges(), 1000);
    }

    @counter("Function")
    calculateSumOfCustomerBalances(): number{
        return this.customers.reduce((accumulator, item) => accumulator + item.balance, 0);
    }

    ngOnDestroy(): void{
        clearInterval(this.intervalId);
    }
}
