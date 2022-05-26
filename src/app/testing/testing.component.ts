import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ddl00: string[] = [];
  ddl00value: string="";

  ngOnInit(): void {
    this.http
      .get<string[]>(
        'https://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true'
      )
      .subscribe({
        next: (result) => {
          this.ddl00 = result;

          this.ddl00value = result[3];

        },
        error: () => {
          this.ddl00 = [];
        },
      });
  }
}
