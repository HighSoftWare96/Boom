import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TimerService {
    private timeOut: any;

    constructor(private router: Router) {

    }

    public startTimeout() {
        // imposto un timeout di un tempo casuale
        this.timeOut = setTimeout(function () {
            this.endTimeout();
        }.bind(this), Math.random() * (60000 - 10000) + 10000);
    }

    public endTimeout() {
        this.router.navigate(['']);
        clearTimeout(this.timeOut);
    }
}