import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }
  ServerName:string = "";
  CreatedServer : string ="NO server added";
  ServerCreated : boolean = false;
  servers = ["server 1" , "server 2"];
  ngOnInit(): void {
  }


  inputChange()
  {
    this.ServerCreated = true;
    this.CreatedServer = this.ServerName;
    this.servers.push(this.ServerName);
  }
}
