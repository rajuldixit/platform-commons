import { DataService } from './../../services/data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentDropdownData: Array<{}> = new Array();
  selectedParentDropdownId: number;
  errorMessage: string = '';
  isErrorMessage: boolean = false;
  constructor(private dataService: DataService, private cdRef:ChangeDetectorRef) { }

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

  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }
  onMessageRecieved(e) {
    this.isErrorMessage = true;
    this.errorMessage = e;
  }

}
