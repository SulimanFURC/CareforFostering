import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    goToLink(): void {
        window.open('https://appsite-alpha-ver-fostering.web.app/', '_blank');
    }
}
