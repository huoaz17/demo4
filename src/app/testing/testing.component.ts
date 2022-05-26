import { ParmaTableService } from './../parma-table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  constructor(private parmatable: ParmaTableService) {}

  ddl00: string[] = [];
  ddl00value: string = '';

  ddl01: string[] = [];
  ddl01value: string = '';

  showMessage: string = 'Good!';

  ngOnInit(): void {
    this.parmatable.LoadParam('5').subscribe({
      next: (result) => {
        this.ddl01 = result;
        this.ddl01value = result[3];
      },
      error: () => {
        this.ddl01 = [];
      },
    });
  }

  ddlonchange(skey: string) {
    console.log('change:' + skey);
    this.showMessage = 'change:' + skey;
    this.parmatable.LoadParam(skey).subscribe({
      next: (result) => {
        this.ddl00 = result;
        // this.ddl00value = result[3];
      },
      error: () => {
        this.ddl00 = [];
      },
    });
  }
}
