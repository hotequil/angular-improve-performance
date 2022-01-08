import { Injectable } from '@angular/core';

import { Provider } from "../types/provider";

const providers: Provider[] = [
    {
        name: "Reid",
        bankStock: 1000
    },
    {
        name: "Cunningham",
        bankStock: 2000
    },
    {
        name: "Kennedy",
        bankStock: 3000
    }
];

@Injectable({
    providedIn: 'root'
})
export class ProvidersService {
    get(): Promise<Provider[]>{
        return new Promise(resolve => resolve(providers));
    }
}
