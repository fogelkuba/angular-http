import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        this.http.post('https://udemy-ng-http-30225.firebaseio.com/', servers);
    }
}
