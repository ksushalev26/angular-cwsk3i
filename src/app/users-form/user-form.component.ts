import { Component } from '@angular/core';

import { User } from '../users';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  languages = ['English', 'Russian',
            'Ukrainian', 'Polish'];

  model: any = {};
  submitted = false;

  onSubmit() { this.submitted = true;
  console.log(this.model)  }
  get diagnostic() { return JSON.stringify(this.model);
  }
  
}