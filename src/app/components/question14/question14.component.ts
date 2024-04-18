import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question14',
  templateUrl: 'question14.component.html',
  styleUrls: ['question14.component.css'],
})
export class Question14 {
  @Input()
  answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.'
  @Input()
  question: string = 'What types of cars do you sell?'
  constructor() {}
}
