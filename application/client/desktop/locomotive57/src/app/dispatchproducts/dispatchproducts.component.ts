import { Component, OnInit } from '@angular/core';
import { DispatchproductsService } from './dispatchproducts.service';

@Component({
  selector: 'app-dispatchproducts',
  templateUrl: './dispatchproducts.component.html',
  styleUrls: ['./dispatchproducts.component.scss'],
})

export class DispatchproductsComponent implements OnInit {
    public dispatch = {
        name: '',
        item: '',
        material: '',
    }

    constructor (
        private dispatchproductsService: DispatchproductsService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.dispatchproductsService.GpCreate(this.dispatch).subscribe(data => {
            this.dispatch.name = ''
 	 	this.dispatch.item = ''
 	 	this.dispatch.material = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}