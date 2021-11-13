import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { User } from '../../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User>;
  action: string;
  selectedUser: User;

  constructor(private httpClientService: HttpClientService,private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      this.refreshData();
     }
   
     refreshData() {
       this.httpClientService.getUsers().subscribe(
         response => this.handleSuccessfulResponse(response),
       );
   
       this.activatedRoute.queryParams.subscribe(
         (params) => {
           this.action = params['action']
         }
       );
     }
    
  

  handleSuccessfulResponse(response) {
    this.users = response;
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }
}