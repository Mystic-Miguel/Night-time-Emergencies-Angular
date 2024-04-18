import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card3',
  templateUrl: 'feature-card3.component.html',
  styleUrls: ['feature-card3.component.css'],
})
export class FeatureCard3 {
  @Input()
  subHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  heading: string = 'Lorem ipsum'
  constructor() {}
}
