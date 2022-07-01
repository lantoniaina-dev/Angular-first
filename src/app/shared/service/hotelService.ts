import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, ObservableInput, throwError } from "rxjs";
import { tap } from "rxjs/operators";
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
