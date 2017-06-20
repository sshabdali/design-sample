import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScreenService {
    largeBreakpoint = 1200;
    mediumBreakpoint = 992;
    smallBreakpoint = 760;
    extraSmallBreakpoint = 480;
    iPhoneRetinaBreakpoint = 320;

    screenWidth = 1000;
    screenHeight = 800;

    private resizeSource = new Subject<undefined>();
    resize$ = this.resizeSource.asObservable();

    constructor() {

        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener('resize', event => this.onResize(event));
        } catch (e) {
            this.screenWidth = 1000;
            this.screenHeight = 800;
        }
    }

    isLargeAndAbove(): boolean {
        return this.screenWidth >= this.largeBreakpoint;
    }

    isMediumAndAbove(): boolean {
        return this.screenWidth >= this.mediumBreakpoint;
    }

    isSmallAndAbove(): boolean {
        return this.screenWidth >= this.smallBreakpoint;
    }

    onResize($event: any): void {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }
}
