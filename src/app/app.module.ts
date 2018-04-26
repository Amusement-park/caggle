import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

// Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AccountModule } from './account/account.module';

// PrimeNG
import { InputTextModule }  from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { CodeHighlighterModule } from 'primeng/codehighlighter';


import { CompetitionModule } from './competition/competition.module';
import { UserService } from './shared/services/user.service';
// import { CompetitionDetailModule } from './competition/detail/competition-detail.module';


// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        AccountModule,
        CompetitionModule,

        FormsModule,
        TableModule,
        InputTextModule,
        DialogModule,
        ProgressBarModule,
        ButtonModule,
        CodeHighlighterModule

    ],
    declarations: [
        AppComponent
        ],
    providers: [AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
        },
        UserService],
    bootstrap: [AppComponent]
})
export class AppModule {}
