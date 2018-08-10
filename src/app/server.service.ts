import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    constructor(private http: Http) {
    }

    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://udemy-ng-http-30225.firebaseio.com/data.json', servers);
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-30225.firebaseio.com/data.json');
    }
}

