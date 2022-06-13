import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    public async getClient() {
        let reponse = await fetch(`http://localhost:8000/api/client/get`)
        let data = await reponse.json()
        return data
    }

}
