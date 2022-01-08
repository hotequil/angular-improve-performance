export const counter = (name: string) => {
    let index = 0;

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        let method = target[propertyKey];

        descriptor.value = function(...args: any[]){
            console.log(`${name}: ${++index}`);

            return method.apply(this, args);
        }
    }
}
