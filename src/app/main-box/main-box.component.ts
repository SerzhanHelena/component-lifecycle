import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

interface Skill {
  name: string;
  value: number;
}

@Component({
  selector: 'app-main-box',
  templateUrl: './main-box.component.html',
  styleUrls: ['./main-box.component.css']
})

export class MainBoxComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy  {

  count = 1;
  name = 'Lena';
  skillsData: Skill [] = [{ name: 'responsibility', value: 7}, { name: 'communication', value: 8}, { name: 'organization', value: 5} ];

  totalSum = this.skillsData.reduce((a, b) => a + b['value'], 0);

  onChanged(sum: boolean, i) {
    sum ? this.totalSum++ : this.totalSum--;
    sum ? this.skillsData[i].value++ : this.skillsData[i].value--;
  }

  ngOnInit() {
    this.log(`ngOnInit`);
  }
  ngOnChanges() {
    this.log(`OnChanges`);
  }
  ngDoCheck() {
    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {
    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {
    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    this.log(`ngAfterContentChecked`);
  }
  ngOnDestroy() {
    this.log(`onDestroy`);
  }

  private log(message: string) {
    console.log(this.count + '. ' + message);
    this.count++;
  }

}
