import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstName: string = "Dhruvi"; // One way data binding >> Interpolation
  lastName: string = "Patel";
  age: number = 25;

  myNewDataType: any;

  lastNmae1: any = "Smith";

  isDisabled: boolean = true;

  listOfSkills: string[] = ['HTML', 'CSS', 'JS', 'Angular', 'TypeScript'];



  constructor() {
    // var a = 10;
    // let b = 10;
    // const c = 10;

    // this.myNewDataType = "fkdlsfkls"
    // this.myNewDataType = 100;
    // this.myNewDataType = true;
    // this.myNewDataType = ['sdfds', 100, false];

    // this.lastNmae1 = "Johnson";
    // this.lastNmae1 = true;

    // this.a = 10;
  }



  ngOnInit(): void {
    let a = 20;

    var b = 10;

    if (true) {

      console.log("Inside If Block : " + a);
    }

    a = 20;

    b = 20;

    debugger;


    const c = 30;
    // c = 20;





  }


  onClickMe() {
    debugger
    alert("Button Clicked Successfully");
  }


  funName($event :any){
    debugger
    console.log("Event Object ", $event);
    
  }


  // Data Binding >> Interpolation, Property Binding, Event Binding, Two way Binding, Class binding and Style binding

  // let, var and const
  // var >> function scope, redeclaration and reassign allowed
  // let >> block scope, no redeclaration, reassign allowed
  // const >> block scope, no redeclaration, no reassign

}

