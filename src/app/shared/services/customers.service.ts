import { Injectable } from '@angular/core';

import { Customer } from "../types/customer";

const customers: Customer[] = [
    {
        name: "Hawkins",
        balance: 500
    },
    {
        name: "Arnold",
        balance: 1500
    },
    {
        name: "Mitchell",
        balance: 2500
    }
];

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    get(): Promise<Customer[]>{
        return new Promise(resolve => resolve(customers));
    }
}
