import { Component, OnInit } from  '@angular/core';
import { APIService } from  '../api.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
 // private  contacts:  Array<object> = [];

  contacts:  any = [];
  constructor(private apiService: APIService) { }
  ngOnInit() {
      this.getContacts();
  }
  // public  getContacts(){
  //     this.apiService.getContacts().subscribe((data:  Array<object>) => {
  //         this.contacts  =  data;
  //         console.log(data);
  //     });
  // }

  public  getContacts(){
    this.apiService.getEmployeesHttp().subscribe((data:  any) => {
        this.contacts=data;
        console.log("Contacts " +data);
    });
}
}
