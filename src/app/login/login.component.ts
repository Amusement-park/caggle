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
        // github callback check
        this.route.queryParams
            .filter(params => params.code)
            .subscribe(params => {
                this.loginService.loginUsingGithub(params.code)
                    .subscribe(data => {
                            // this.goToDashboard()
                            localStorage.setItem('isLoggedin', 'true');
                            localStorage.setItem('token', JSON.stringify(data));
                            this.router.navigate(['/competition'], { relativeTo: this.route });
                            // console.log(data)
                        }
                    )
            });
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    loginUsingGithub() {
        // this.router.navigate(['/competition'], { relativeTo: this.route });
        this.loginService.goToOauthPage();
        return false;
    }
}
