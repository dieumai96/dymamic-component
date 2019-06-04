import { Component, OnInit, Input } from '@angular/core';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() data: any;
  constructor(
    private adService: AdService
  ) { }

  ngOnInit() {
  }

  prevItem() {
    this.adService.choiceSlider.next(false);
  }

  nextItem() {
    this.adService.choiceSlider.next(true);
  }

}
