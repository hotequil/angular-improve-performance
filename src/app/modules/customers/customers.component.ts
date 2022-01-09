import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { fromEvent, Subscription } from "rxjs";

import { CustomersService } from "../../shared/services/customers.service";
import { Customer } from "../../shared/types/customer";
import { counter } from "../../shared/decorators/counter";
import { OptionsCounter } from "../../shared/types/options-counter";

const options: OptionsCounter = { router: null };

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy{
    customers: Customer[] = [];
    count = 0;

    private clickWindow$!: Subscription;

    constructor(private customersService: CustomersService, router: Router){
        options.router = router;
    }

    async ngOnInit(): Promise<void>{
        this.customers = await this.customersService.get();
        this.clickWindow$ = fromEvent(window, "click").subscribe(() => this.onClickAtWindow())
    }

    @counter("You clicked on window", options)
    private onClickAtWindow(){
        this.count++;
    }

    ngOnDestroy(): void{
        this.clickWindow$.unsubscribe();
    }
}
