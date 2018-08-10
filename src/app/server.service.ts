import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class ServerService {

    private url = 'https://udemy-ng-http-30225.firebaseio.com/data.json';

    constructor(private http: Http) {
    }


    // put or post
    // https://udemy-ng-http-30225.firebaseio.com/data.json


    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.url, servers);
    }

    getServers() {
        return this.http.get(this.url);
    }
}

