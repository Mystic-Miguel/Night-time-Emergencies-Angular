import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawxgjz: string = ' '
  raw30ke: string = ' '
  rawel2t: string = ' '
  rawhwsj: string = ' '
  raw2gfi: string = ' '
  raw3ros: string = ' '
  rawkk74: string = ' '
  rawbgtm: string = ' '
  raw1ket: string = ' '
  raw8uro: string = ' '
  rawopp8: string = ' '
  rawirhm: string = ' '
  rawe14w: string = ' '
  rawd8df: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Night time emergencies')
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
      {
        property: 'og:title',
        content: 'Night time emergencies',
      },
      {
        property: 'og:description',
        content:
          'Immediate, urgent, and expert help for fire, smoke, water damage, flooding, plumbing, and electrical emergencies. Available 24/7. Call now!',
      },
    ])
  }
}
