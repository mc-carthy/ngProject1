import {Control, ControlGroup} from 'angular2/common';

export class PasswordValidators {

    static complexPassword(control: Control)
    {
        const minLength = 5;

        // ignore the complex password error if the field is empty,
        // no need to display both errors
        if (control.value == '')
        {
            return null;
        }

        if (control.value.length < minLength)
        {
            return {
                complexPassword: {
                    minLength: minLength
                }
            };
        }

        return null;

    }

    static passwordsShouldMatch(group: ControlGroup)
    {
        var newPassword = group.find('newPassword').value;
        var confirmPassword = group.find('confirmPassword').value;

        // As above, ignore these validations if either field is blank.
        // No need to show both errors in that case

        if (newPassword == '' || confirmPassword == '')
        {
            return null;
        }

        if (newPassword != confirmPassword)
        {
            return { passwordsShouldMatch: true };
        }

        return null;
    }
}