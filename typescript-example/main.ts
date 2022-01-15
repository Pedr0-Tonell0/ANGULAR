interface Person  {
    name:string;
    lastname:string;
}

class Kid implements Person {
    lastname:string;
    name:string;
}

const kid : Kid = new Kid ();
kid.lastname = 'Tonello'
kid.name = 'Pedro';

const registerPerson = (person: Person): void => {
    console.log(person)
}

registerPerson(kid);