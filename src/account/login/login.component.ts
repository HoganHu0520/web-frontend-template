import { Component, Injector, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { accountModuleAnimation } from '@shared/animations/routerTransition';

@Component({
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.scss'
    ],
    animations: [accountModuleAnimation()],
    encapsulation: ViewEncapsulation.Emulated,
    providers: [LoginService],
})
export class LoginComponent {
    submitting: boolean = false;

    emailFormControl = new FormControl('', {
        validators: [Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,})+$/)],
        updateOn: 'blur'
    });

    passwordFormControl = new FormControl();

    constructor(
        injector: Injector,
        public loginService: LoginService,
        private _router: Router,
    ) {
    }

    login(): void {
        this.submitting = true;
        this.loginService.login(() => {
            this.submitting = false
        });
    }
}
