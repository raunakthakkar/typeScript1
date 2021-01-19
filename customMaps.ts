import {Loader} from "@googlemaps/js-api-loader";
const loader= new Loader({apiKey:"",version:"weekly"});
interface Mappable{
    location:{
        lat:number,
        lng:number
    }
}
export class CustomMap{
    private googleMap:google.maps.Map;
    constructor(){
        const loader= new Loader({apiKey:"",version:"weekly"});
        loader.load().then(()=>{
            const map=new google.maps.Map(document.getElementById('map')as HTMLElement,{center:{lat:0,lng:0},zoom:1})})
    }
    addMarker(mappable:Mappable){
        const marker=new google.maps.Marker({map:this.googleMap,position:{lat:mappable.location.lat,lng:mappable.location.lng}})
    }
}