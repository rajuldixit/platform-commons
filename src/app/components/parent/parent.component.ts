import { DataService } from './../../services/data.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentDropdownData: Array<{}> = new Array();
  selectedParentDropdownId: number;
  errorMessage: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getParentsJSONdata();
  }

  async getParentsJSONdata() {
    this.dataService.getParentJSON().then((data : Array<{}>) => {
      this.parentDropdownData = data;
    })
  }

  selectedItem(i) {
    this.selectedParentDropdownId = i.target.value;
  }

  onMessageRecieved(e) {
    this.errorMessage = e;
  }

}
