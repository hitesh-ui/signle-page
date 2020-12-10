import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'single-page';
  public showPopUp: boolean = false;
  public addList: boolean = true;
  public userDetails: any = [];
  public form: any;
  public male: any = [];
  public female: any = [];

  ngOnInit() {
    this.formDetails();
  }
  public formDetails(){
    this.form = new FormGroup({
      fullname: new FormControl(""),
      datepicker: new FormControl(""),
      languages: new FormControl(""),
      gender: new FormControl(""),
      about: new FormControl("")
    });
  }
  /*
  function for use onsubmit
  */
  public onSubmit(user:any) {
    this.userDetails.push(user);
    this.showPopUp = true;
    this.addList = false;
    this.countGender(user.gender);
  }
  /*
  Function go to add user List
  */
  public backList() {
    this.showPopUp = false;
    this.addList = true;
    this.countGender('');
    this.formDetails();
  }
  /*
 Function to count gender List
 */
  public countGender(val:any) {
    if (val == 'male') {
      var i = 0;
      this.male.push(i);
    }
    if (val == 'female') {
      var i = 0;
      this.female.push(i);
    }
  }
}
