import { Component, OnDestroy, OnInit } from '@angular/core';

import { fromEvent, Subscription } from "rxjs";

import { CustomersService } from "../../shared/services/customers.service";
import { Customer } from "../../shared/types/customer";
import { counter } from "../../shared/decorators/counter";

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy{
    customers: Customer[] = [];
    count = 0;

    private clickWindow$!: Subscription;

    constructor(private customersService: CustomersService){}

    async ngOnInit(): Promise<void>{
        this.customers = await this.customersService.get();
        this.clickWindow$ = fromEvent(window, "click").subscribe(() => this.onClickAtWindow())
    }

    @counter("You clicked on window")
    private onClickAtWindow(){
        this.count++;
    }

    ngOnDestroy(): void{
        this.clickWindow$.unsubscribe();
    }
}
