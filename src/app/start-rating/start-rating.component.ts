import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { hotelListeService } from '../shared/service/hotelListeService.service';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {

  @Input()
  public rating: any;

  @Output()
  public starRatingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  public sendRating(): void {
    this.starRatingClicked.emit(this.rating)
  }

}
