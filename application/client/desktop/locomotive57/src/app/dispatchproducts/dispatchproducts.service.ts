import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class DispatchproductsService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(dispatch): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/dispatch', dispatch);
    }
}