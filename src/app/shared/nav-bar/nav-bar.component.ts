import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    @Input() opened = false;

    constructor () {
    }

    ngOnInit(): void {   
    }

    toggle() {

       /*  if (this.opened ) {
            this.opened = false;
        }else {
            this.opened = true;
        } */
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);


    }

}