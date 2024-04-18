import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-question12',
  templateUrl: 'question12.component.html',
  styleUrls: ['question12.component.css'],
})
export class Question12 {
  @Input()
  question: string = 'What types of cars do you sell?'
  @Input()
  answer: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.'
  constructor() {}
}
