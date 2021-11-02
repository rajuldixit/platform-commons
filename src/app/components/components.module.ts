import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ]
})
export class ComponentsModule { }
