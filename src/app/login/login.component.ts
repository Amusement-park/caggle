import { Component, OnInit, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';

import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router,
        private route: ActivatedRoute,
        @Optional() private loginService: LoginService) {
    }

    ngOnInit() {
        // github callback check
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                this.loginService.loginUsingGithub(params.code)
                    .subscribe(data =>
                        console.log(data)
                    )
            });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    loginUsingGithub() {
        this.loginService.goToOauthPage()
        return false
    }
}
