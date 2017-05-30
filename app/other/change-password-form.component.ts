import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './passwordValidators';


@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password-form.component.html'
})
export class ChangePasswordFormComponent {

    form: ControlGroup;

    constructor(fb: FormBuilder)
    {
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            confirmPassword: ['', Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch }
        );
    }

    resetPassword()
    {
        var currentPassword = this.form.find('currentPassword');
        if (currentPassword.value != "passw0rd")
        {
            currentPassword.setErrors({ validCurrentPassword: true })
        }

        if (this.form.valid)
        {
            alert("Password successfully changed");
        }
    }
}