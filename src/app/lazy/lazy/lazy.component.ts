import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {

  constructor(private http: HttpClient) { 
    // POC: Check if we have a proper injector
    console.log('http', http);
  }

  ngOnInit(): void {
  }

}
