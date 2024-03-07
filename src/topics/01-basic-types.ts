

const name: string = 'Yayo';
let hpPoints: number | 'FULL' = 95; // "|" nos sirve para tolerar números o texto (inclusive un texto predefinido)

const isAlive: boolean = true;

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
})



export{}; //El export da a entender que es un módulo