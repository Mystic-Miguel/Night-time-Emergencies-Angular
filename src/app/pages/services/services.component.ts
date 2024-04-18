import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-services',
  templateUrl: 'services.component.html',
  styleUrls: ['services.component.css'],
})
export class Services {
  rawb2xl: string = ' '
  rawbdj2: string = ' '
  rawq1z3: string = ' '
  rawv6wr: string = ' '
  rawg9kv: string = ' '
  rawdwvl: string = ' '
  rawymyl: string = ' '
  rawg75u: string = ' '
  raw4xhc: string = ' '
  rawd8ap: string = ' '
  rawzfh9: string = ' '
  raw2sc0: string = ' '
  rawu22c: string = ' '
  rawq28x: string = ' '
  rawyptl: string = ' '
  rawmz7t: string = ' '
  raw42vl: string = ' '
  raw4sfo: string = ' '
  rawjenr: string = ' '
  raw4r3u: string = ' '
  rawltmn: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Services - Night time emergencies')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
      {
        property: 'og:title',
        content: 'Services - Night time emergencies',
      },
      {
        property: 'og:description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
    ])
  }
}
