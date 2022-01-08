import { Injectable } from '@angular/core';

import { uniqueNamesGenerator, animals } from 'unique-names-generator';

import { Customer } from "../types/customer";

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    get(): Promise<Customer[]>{
        const customers: Customer[] = [];

        for(let index = 0; index <= 4; index++){
            customers.push({
                name: uniqueNamesGenerator({ dictionaries: [animals] }),
                balance: Math.round(Math.random() * 1000)
            })
        }

        return new Promise(resolve => resolve(customers));
    }
}
