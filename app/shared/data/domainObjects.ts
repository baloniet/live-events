// this file contains simple domain objects, bigger ones are defined in separate files
export class Post {
    constructor(postId, name, zipcode) {
        this.postId = postId;
        this.name = name;
        this.zipcode = zipcode;
    }
    postId: number;
    name: string;
    zipcode: number;
}

export class Commune {
    constructor(communeId, name) {
        this.communeId = communeId;
        this.name = name;
    }
    communeId: number;
    name: string;
}

export class Statement {
    statementId: number;
    name: string;
    content: string;
}

export class CitizenShip {
    citizenshipId: number;
    name: string;
}

export class Education {
    constructor(educationId, name) {
        this.educationId = educationId;
        this.name = name;
    }
    educationId: number;
    name: string;
}

export class Person {
    constructor(personId, firstName, lastName) {
        this.personId = personId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    personId: number;
    firstName: string;
    lastName: string;
    address: string;
    post: Post;
    commune: Commune;
    birthDate: Date;
    mobileNumber: string;
    email: string;
    citizenship: CitizenShip;
    education: Education;
    statement: Statement;
}

