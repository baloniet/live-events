// this file contains simple domain objects, bigger ones are defined in separate files
export class Post{
    constructor(postId,name,zipcode){
        this.postId=postId;
        this.name=name;
        this.zipcode=zipcode;
    }
 postId: number;
 name: string;
 zipcode: number;
}

export class Commune{
 communeId: number;
 name: string;
}

export class Statement{
 statementId: number;
 name: string;
 content: string;
}

export class CitizenShip{
 citizenshipId: number;
 name: string;
}

export class Education{
 educationId: number;
 name: string;
}



