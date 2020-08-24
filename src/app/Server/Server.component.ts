import {Component} from "@angular/core"

@Component({
    selector: "app-Server",
    templateUrl:"./Server.component.html",
    styleUrls: ["./server.component.css"]
})
export class ServerComponent{
   ServerID:number = 11;
   ServerStatus : string = "Offline";
    serverName : string ="";


   constructor (){
    this.ServerStatus = Math.random() > 0.5 ? "online" : "offline";
    
   }

   //

   ngOnInit(): void {
    //this.serverName = this.serverN;
}
   GetColor()
   {
       return this.ServerStatus === "online"? "green" : "red";
   }
}