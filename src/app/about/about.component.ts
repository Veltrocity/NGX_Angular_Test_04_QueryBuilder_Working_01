import { Component, OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { QueryBuilderModule } from 'angular2-query-builder';

import { environment } from '@env/environment';
import { type } from 'os';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  query = {
    condition: 'and',
    rules: [
      { field: 'age', operator: '<=', value: 'Bob' },
      { field: 'gender', operator: '&gt;=', value: 'm' },
      { field: 'name', operator: '&gt;=', value: 'Lakers' }
    ]
  };

  config: QueryBuilderConfig = {
    fields: {
      age: { name: 'Age', type: 'number' },
      gender: {
        name: 'Gender',
        type: 'category',
        options: [
          { name: 'Male', value: 'm' },
          { name: 'Female', value: 'f' }
        ]
      }
    }
  };

  config: QueryBuilderConfig = {
    fields: {
      teamID: { name: 'Name', type: 'String' },
      games: { name: 'Games', type: 'String' },
      wins: { name: 'Wins', type: 'String' },
      losses: { name: 'Losses', type: 'String' },
      pdiff: { name: 'Point-differential', type: 'String' },
      ATS_wins: { name: 'ATS_wins', type: 'String' },
      ATS_losses: { name: 'ATS_losses', type: 'String' },
      id: {
        name: 'Team Name',
        type: 'String',
        options: [
          { name: 'Lakers', value: 'String' },
          { name: 'Raptors', value: 'String' }
        ]
      },
      age: { name: 'Home/Away', type: 'number' },
      gender: {
        name: 'Team_status',
        type: 'category',
        options: [
          { name: 'Home', value: 'H' },
          { name: 'Away', value: 'A' }
        ]
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
