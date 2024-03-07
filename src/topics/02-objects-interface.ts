
const skills: string[] = ['Bash', 'Counter', 'Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;  //El '?' es para declarar como opcional el string.
}


const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', ' Counter'],
};


strider.hometown = 'Rivendell'; 



console.table(strider);

export {};