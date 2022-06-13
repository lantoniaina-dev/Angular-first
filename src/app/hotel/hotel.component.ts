import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/service/client.service';
import { hotelListeService } from '../shared/service/hotelListeService.service';
import { IHotel } from '../shared/types/interfaces';
import { listes } from './listes';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  private _hotelListeService;
  private _clientService;
  constructor(private hotelListeService: hotelListeService, private clientService: ClientService) {
    this._hotelListeService = hotelListeService;
    this._clientService = clientService;
  }

  title = "Liste courses"
  listes: IHotel[] = listes
  public listeFilter: IHotel[] = [];
  private _filterSearch = "mot";
  clickSendRating = 2;

  ngOnInit(): void {
    this.listeFilter = this.listes;
    // this.filterSearch = "mot"
    console.log("Hotels :", this._hotelListeService.getHotels());
    this.getClient()
  }

  async getClient() {
    let clients = await this._clientService.getClient()
    console.log("Clients :", clients);
  }

  public get filterSearch(): string {
    return this._filterSearch;
  }

  public set filterSearch(filter: string) {
    this._filterSearch = filter;
    this.listeFilter = this.filterSearch ? this.filterHotels(this.filterSearch) : this.listes;
    //si filterSearch exist FilterHotel(filterSearch) else filterSearch = listes
  }

  private filterHotels(search: string): IHotel[] {
    search = search.toLocaleLowerCase();
    let res = this.listes.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(search) !== -1
    );
    console.log(res);
    return res
  }

  public receiveRatingClick(event_rating: any) {
    console.log("Rating :", event_rating);
    this.clickSendRating = event_rating
  }

}
