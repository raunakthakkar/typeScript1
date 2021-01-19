import {User} from './Users';
import {Company} from './company';
import {CustomMap} from "./customMaps"
console.log("Hello Typescript here ")
let user=new User;
console.log(user)
let comp= new Company()
console.log(comp)
const myMap=new CustomMap();
myMap.addMarker(user);
myMap.addMarker(comp)


