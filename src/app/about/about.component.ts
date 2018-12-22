import { Component, OnDestroy, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  @ViewChild('dataTable') table:ElementRef;
  datatable: any;
  dtOption:any;

  constructor() { }
  ngOnInit() {
this.dtOption={
  "paging":true,  
  "ordering":false,
  "info":false
}

    this.datatable=$(this.table.nativeElement);
    this.datatable.dataTable(this.dtOption);
  this.datatable.dataTable();
  }

}
