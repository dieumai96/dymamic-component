import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    
      <img [src] = "data.image" style = 'max-width : 800px'>
  `
})
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
}
