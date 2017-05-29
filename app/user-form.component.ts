import { Component, OnInit } from 'angular2/core';
import { FormBuilder, ControlGroup, Validators } from 'angular2/common';
import { CanDeactivate, Router, RouteParams } from 'angular2/router';
import { BasicValidators } from './basicValidators';
import { UserService } from './user.service';
import { User } from './user';

@Component({
    templateUrl: 'app/user-form.component.html',
    providers: [UserService]
})

export class UserFormComponent implements OnInit, CanDeactivate {
    form: ControlGroup;
    isSaving = false;
    title: string;
    user = new User();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _routeParams: RouteParams,
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

    ngOnInit() {
        var id = this._routeParams.get("id");

        this.title = id ? "Edit User" : "New User";

        if (!id)
        {
            return;
        }

        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404)
                    {
                        this._router.navigate(['NotFound']);
                    }
                }
            )
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