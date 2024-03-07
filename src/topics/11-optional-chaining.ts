
export interface Passenger { 
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Fernando"
}

const passenger2: Passenger = {
    name: "Melissa",
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = ( passenger: Passenger) => {
        const howManyChildren = passenger.children?.length || 0; //Así funciona el optional chainning, se usa un "?" para un dato opcional y se puede poner el "||" para poner otro valor en vez de if
    
    console.log(passenger.name, howManyChildren)
}

printChildren(passenger1);
