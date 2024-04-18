import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card1',
  templateUrl: 'feature-card1.component.html',
  styleUrls: ['feature-card1.component.css'],
})
export class FeatureCard1 {
  @Input()
  subHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  heading: string = 'Lorem ipsum'
  constructor() {}
}
