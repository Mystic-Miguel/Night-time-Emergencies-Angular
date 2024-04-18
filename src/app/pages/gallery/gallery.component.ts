import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.css'],
})
export class Gallery {
  rawqrl9: string = ' '
  rawfmbw: string = ' '
  raw60x0: string = ' '
  raw7kcc: string = ' '
  rawdhv5: string = ' '
  rawl3lf: string = ' '
  rawe2mk: string = ' '
  rawrnnw: string = ' '
  rawye51: string = ' '
  rawfxt5: string = ' '
  rawpijs: string = ' '
  rawku26: string = ' '
  raw1tit: string = ' '
  raw3vnk: string = ' '
  rawskho: string = ' '
  raw0g3t: string = ' '
  rawydsl: string = ' '
  rawajy6: string = ' '
  raw3ahq: string = ' '
  rawc86o: string = ' '
  rawcr0j: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Gallery - Night time emergencies')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
      {
        property: 'og:title',
        content: 'Gallery - Night time emergencies',
      },
      {
        property: 'og:description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
    ])
  }
}
