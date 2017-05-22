System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            class CourseService {
                getCourses() {
                    return ["Course1", "Course2", "Course3"];
                }
            }
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map