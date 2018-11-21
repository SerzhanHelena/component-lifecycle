import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() name: string;
  @Output() onChanged = new EventEmitter<boolean>();

  change(approved: boolean) {
    this.onChanged.emit(approved);
  }
  constructor() { }

  ngOnInit() {
  }
}
