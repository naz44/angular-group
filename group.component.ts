import { Component } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent{
  namef="John";
  place="USA";
  occupation="Manager";
  status="Show full details";
  toggle=false;
  lastname="smith";
  dob="12-12-78";
  showValues = false;
  showvalues()
  {
   this.showValues= ! this.showValues;
  }
}
  // constructor() { }
  // showHide()
  // {
  //   this.toggle= ! this.toggle;
  //   this.status=this.toggle? 'Hide full details':'Show full details';
  // }
  // ngOnInit() {
  // }

