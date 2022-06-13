import { Injectable } from "@angular/core";
import { listes } from "src/app/hotel/listes";

@Injectable({
    providedIn: 'root'
})
export class hotelListeService {
    public getHotels() {
        return listes
    }
    public getHotelsLength() {
        return listes.length
    }
}

//Injectable  permet d'enregistrer le Class au system d'injection d'angular