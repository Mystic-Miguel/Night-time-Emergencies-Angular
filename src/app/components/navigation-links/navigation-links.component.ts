import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links',
  templateUrl: 'navigation-links.component.html',
  styleUrls: ['navigation-links.component.css'],
})
export class NavigationLinks {
  @Input()
  text4: string = 'Contact Us'
  @Input()
  text1: string = 'Services'
  @Input()
  rootClassName: string = ''
  @Input()
  text3: string = 'FAQ'
  @Input()
  text: string = 'About Us'
  @Input()
  text2: string = 'Gallery'
  constructor() {}
}
