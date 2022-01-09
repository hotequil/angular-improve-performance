import { OptionsCounter } from "../types/options-counter";

export const counter = (name: string, options?: OptionsCounter) => {
    let index = 0;

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        let method = target[propertyKey];

        descriptor.value = function(...args: any[]){
            const message = `${name}: ${++index}`;

            console.log(options?.router ? `${message}, on path ${options.router.url}` : message);

            return method.apply(this, args);
        }
    }
}
