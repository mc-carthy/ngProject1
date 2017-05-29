import { Component } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { CanDeactivate, Router } from 'angular2/router';
import { BasicValidators } from './basicValidators';
import { UserService } from './user.service';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements CanDeactivate {
    form: ControlGroup;
    isSaving = false;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _userService: UserService
    )
    {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', BasicValidators.email],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                postcode: []
            })
        });
    }

    routerCanDeactivate() {
        if (this.form.dirty && !this.isSaving)
        {
            return confirm('You have unsaved changes. Are you sure you want to leave this page?')
        }
        return true;
    }

    save() {
        this._userService.addUser(this.form.value)
            .subscribe(x => {
                this._router.navigate(['Users']);
            });
        this.isSaving = true;
    }
}