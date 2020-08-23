import {Component} from "@angular/core"

@Component({
    selector: "app-Server",
    templateUrl:"./Server.component.html",
    styleUrls: ["./server.component.css"]
})
export class ServerComponent{
   ServerID:number = 11;
   ServerStatus : string = "Offline";
}