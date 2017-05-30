System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Address, User;
    return {
        setters: [],
        execute: function () {
            Address = class Address {
            };
            exports_1("Address", Address);
            User = class User {
                constructor() {
                    this.address = new Address();
                }
            };
            exports_1("User", User);
        }
    };
});
//# sourceMappingURL=user.js.map