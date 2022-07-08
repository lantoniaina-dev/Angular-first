import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, ObservableInput, throwError, of } from "rxjs";
import { tap, map } from "rxjs/operators";
import { IHotel } from "../types/interfaces";

@Injectable({
    providedIn: 'root'
})
export class hotelHttpService {

    private readonly HOTEL_API_URL = "api/hotels.json";
    private readonly ARTICLE_API_URL = "api/hotels.json";

    constructor(private http: HttpClient) { }

    public getHotels(): Observable<IHotel[]> {
        return this.http.get<IHotel[]>(this.HOTEL_API_URL).pipe(
            tap((hotels: IHotel[]) => console.log('hotelsHttp:', hotels)),
            catchError(this.handleError)
        )
    }

    public getHotelsById(id: number): Observable<IHotel> {
        if (id == 0) {  //si l'utilisatuer entre un id 0 qui n'existe pas
            return of(this.getDefaultHotel())
        }
        return this.getHotels().pipe(
            map(hotels => hotels.find(hotel => hotel.hotelId == id))
        )
    }

    private getDefaultHotel(): IHotel {
        return {
            hotelId: 0,
            hotelName: null,
            description: null,
            rating: null,
            imageUrl: null,
            price: null
        }
    }

    public getArticle(): Observable<any[]> {
        return this.http.get<any[]>(this.HOTEL_API_URL).pipe(
            tap((articles: any[]) => console.log('hotelsHttp:', articles)),
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred :', error.error.message);
        } else {
            console.error(
                'Backend return code' + error.status + ', Body was : ' + error.error
            );
        }
        return throwError('Somethig bad happened ; please try again later')
    }
}
