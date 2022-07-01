import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hotelHttpService } from '../../shared/service/hotelService';
import { IHotel } from '../../shared/types/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public _id: any;
  MonHotel: any = {};
  public errorMsg: any;
  private _httpHotels;
  clickSendRating = 2;


  constructor(private route: ActivatedRoute, private hotels: hotelHttpService, private router: Router) {
    this._httpHotels = hotels;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id : ', id);
    this._id = id;

    this.gethttpHotels();
  }

  async gethttpHotels() {
    await this._httpHotels.getHotels().subscribe({
      next: hotels => {
        this.MonHotel = hotels.find(hotel => hotel.hotelId == this._id)
      },
      error: err => this.errorMsg = err
    });
  }

  public receiveRatingClick(event_rating: any) {
    console.log("Rating :", event_rating);
    this.clickSendRating = event_rating
  }

  public backToList(): void {
    this.router.navigate(['/hotels']);
  }

}