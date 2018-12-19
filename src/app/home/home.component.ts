import { Component, OnDestroy, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

declare var $;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  users: any;
  usersCopy: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  constructor(private http: HttpClient) {
    this.http.get('https://reqres.in/api/users').subscribe(data => {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        processing: true
    }
      this.users=data;
      this.usersCopy=this.users.data;
      console.log(this.usersCopy);
      this.dtTrigger.next();
    });
   }

  ngOnInit() {
  
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
