import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question13',
  templateUrl: 'question13.component.html',
  styleUrls: ['question13.component.css'],
})
export class Question13 {
  @Input()
  answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.'
  @Input()
  question: string = 'What types of cars do you sell?'
  constructor() {}
}
