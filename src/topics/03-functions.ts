

function addNumbers(a: number, b: number): number {
    return a + b;
}


const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}


function multiply(firtsnumber: number, secondnumber?: number, base: number = 2) {
    return firtsnumber * base;
}



//const result: number = addNumbers(20, 20);
//const result2: string = addNumbersArrow(20, 20);
//const multiplyResult: number = multiply(5);
//console.log({ result, result2, multiplyResult })


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;

}


const strider: Character = {
    name: 'Dumbledore',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}


healCharacter(strider, 10);
healCharacter(strider, 50);

strider.showHp();


export { };