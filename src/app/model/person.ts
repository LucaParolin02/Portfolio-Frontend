export class Person {
    id?:number;
    name: string;
    age: number;
    img:string;
    mail:string;
    phone:string;
    location:string;
    description:string;

    constructor(name: string, age: number, img: string, mail: string, phone: string, location: string, description: string){
        this.name = name;
        this.age = age;
        this.img = img;
        this.mail = mail;
        this.phone = phone;
        this.location = location;
        this.description = description;
    }
}
