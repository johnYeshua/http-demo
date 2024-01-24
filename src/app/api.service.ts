import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
    //API_URL  =  'http://localhost:8000';
  
    API_URL2  =  'http://localhost:4200/../assets/customers.json';
    constructor(private  httpClient:  HttpClient) {}
    getEmployeesHttp(){
        return  this.httpClient.get(this.API_URL2);
    }
    
    // getContacts(){
    //       return  this.httpClient.get(`${this.API_URL}/contacts`);
    // }
    
    

}