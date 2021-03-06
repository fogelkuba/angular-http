import {Component} from '@angular/core';
import {ServerService} from "./server.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    servers = [
        {
            name: 'Testserver',
            capacity: 10,
            id: this.generateId()
        },
        {
            name: 'Liveserver',
            capacity: 100,
            id: this.generateId()
        }
    ];
    constructor(private serverService: ServerService){}


    onSave() {
        this.serverService.storeServers(this.servers)
            .subscribe(
                resp => {
                    console.log(resp);
                }
            );
    }

    onGet() {
        this.serverService.getServers()
            .subscribe(
                (resp: Response) => {
                    const data = resp.json();
                    console.log(data);
                    // this.servers = resp;
                }
            );
    }

    onAddServer(name: string) {
        this.servers.push({
            name: name,
            capacity: 50,
            id: this.generateId()
        });
    }

    private generateId() {
        return Math.round(Math.random() * 10000);
    }
}
