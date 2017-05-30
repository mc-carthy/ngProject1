System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters: [],
        execute: function () {
            PasswordValidators = class PasswordValidators {
                static complexPassword(control) {
                    const minLength = 5;
                    // ignore the complex password error if the field is empty,
                    // no need to display both errors
                    if (control.value == '') {
                        return null;
                    }
                    if (control.value.length < minLength) {
                        return {
                            complexPassword: {
                                minLength: minLength
                            }
                        };
                    }
                    return null;
                }
                static passwordsShouldMatch(group) {
                    var newPassword = group.find('newPassword').value;
                    var confirmPassword = group.find('confirmPassword').value;
                    // As above, ignore these validations if either field is blank.
                    // No need to show both errors in that case
                    if (newPassword == '' || confirmPassword == '') {
                        return null;
                    }
                    if (newPassword != confirmPassword) {
                        return { passwordsShouldMatch: true };
                    }
                    return null;
                }
            };
            exports_1("PasswordValidators", PasswordValidators);
        }
    };
});
//# sourceMappingURL=passwordValidators.js.map