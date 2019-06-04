import { Injectable } from '@angular/core';

import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad-item';
import { HeroComponent } from './hero/hero.component';
import { BehaviorSubject } from 'rxjs';
let choiceSlider: any = null;

@Injectable()
export class AdService {
    choiceSlider = new BehaviorSubject(choiceSlider);
    choiceSlider$ = this.choiceSlider.asObservable();
    getAds() {
        return [
            new AdItem(HeroComponent, { name: 'Bombasto', bio: 'Brave as they come', image: 'https://static.addtoany.com/images/dracaena-cinnabari.jpg' }),

            new AdItem(HeroComponent, { name: 'Dr IQ', bio: 'Smart as they come', image: 'https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-beauty-colorful-237018.jpg&fm=jpg' }),


        ];
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/