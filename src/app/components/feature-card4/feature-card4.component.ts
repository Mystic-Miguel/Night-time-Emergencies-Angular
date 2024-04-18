import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card4',
  templateUrl: 'feature-card4.component.html',
  styleUrls: ['feature-card4.component.css'],
})
export class FeatureCard4 {
  @Input()
  subHeading: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.'
  @Input()
  heading: string = 'Lorem ipsum'
  constructor() {}
}
