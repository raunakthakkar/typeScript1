//here i am creating a class for users and exporting it to index.ts
import fake from "faker";
export class User{
    name:string;
    location:{
        lat:number;
        long:number;
    };
    constructor(){
        this.location={
            lat:parseFloat(fake.address.latitude()),
            long:parseFloat(fake.address.longitude()),  
        }
    }
}