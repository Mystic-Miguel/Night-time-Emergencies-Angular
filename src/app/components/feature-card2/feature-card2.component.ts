import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card2',
  templateUrl: 'feature-card2.component.html',
  styleUrls: ['feature-card2.component.css'],
})
export class FeatureCard2 {
  @Input()
  heading: string = 'Lorem ipsum'
  @Input()
  subHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  constructor() {}
}
