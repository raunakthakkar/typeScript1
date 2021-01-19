import fake from "faker";

export class Company{
    compFirstName:string
    location:{
lat:number;
lng:number
    }
    constructor(){
        this.compFirstName=fake.company.companyName();
        this.location={
            lat:parseFloat(fake.address.latitude()),
            lng:parseFloat(fake.address.latitude()),
        }

    }
}