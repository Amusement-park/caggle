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
    constructor(private router: Router,
        private route: ActivatedRoute,
        @Optional() private loginService: LoginService) {
    }

    ngOnInit() {

        // is token exist, then goTo dashboard
        if(localStorage.getItem('token')) {
            this.router.navigate(['/dashboard'], { relativeTo: this.route });
        }

        // if code queryString is setted, check github login
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                this.loginService.loginUsingGithub(params.code)
                    .subscribe(data => {
                            // this.goToDashboard()
                            // localStorage.setItem('isLoggedin', 'true');
                            localStorage.setItem('token', JSON.stringify(data));
                            this.router.navigate(['/competition'], { relativeTo: this.route });
                            // console.log(data)
                        }
                    )
            });
    }

    onLoggedin() {
        localStorage.setItem('token', JSON.stringify('{}'));
    }

    loginUsingGithub() {
        // this.router.navigate(['/competition'], { relativeTo: this.route });
        this.loginService.goToOauthPage();
        return false;
    }
}
