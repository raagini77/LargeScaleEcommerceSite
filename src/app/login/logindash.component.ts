import { Component } from '@angular/core';

@Component({
  selector: 'logindash-root',
  templateUrl: './logindash.component.html',
  
})
export class LogindashComponent {
    
  Some:string="user";
UserChangePanel(){
this.Some='user';
this.Some != "driver";
this.Some != "vendor";
}
DriverChangePanel(){
this.Some='driver';
this.Some != "user";
this.Some != "vendor";
}

VendorChangePanel(){
this.Some='vendor';
this.Some != "driver";
this.Some != "user";
}


login(username, pass){
  
    if(this.Some === "user"){
alert(this.Some+""+username +""+pass);
    }
if(this.Some === "driver"){
alert(this.Some);
    }
if(this.Some === "vendor"){
alert(this.Some);
    }
}

}