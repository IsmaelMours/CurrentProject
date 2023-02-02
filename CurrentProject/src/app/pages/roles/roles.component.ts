import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roleName!: string;
  constructor() { }

  ngOnInit(): void {
  }
  createRole() {
    console.log('Creating role with name:', this.roleName);
    // Add code to save the role to a database, or call an API to create the role on the server. 
    this.roleName = '';
  }
}
