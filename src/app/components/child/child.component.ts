import { DataService } from './../../services/data.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() id : number;
  @Output() message = new EventEmitter();
  age: string;
  flag: boolean;
  childJSONdata: Array<{}> = new Array();

  constructor(private dataService: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.id) {
      this.fetchAge();
    }
  }

  fetchAge() {
    this.flag = false;
    this.childJSONdata.forEach((item: {Id: number, age: string}) => {
      if(item.Id == this.id) {
        this.age = item.age;
        this.flag = true;
      }
    });
    if(!this.flag) {
      this.message.emit('No data present');
    } else {
      this.message.emit('');
    }
  }

  ngOnInit(): void {
    this.getChildJSONdata();
  }


  async getChildJSONdata() {
    this.dataService.getChildJSON().then((data : Array<{}>) => {
      this.childJSONdata = data;
    })
  }
}
