"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var welcome_component_1 = require("./components/welcome/welcome.component");
var feedback_component_1 = require("./components/feedback/feedback.component");
var appRoutes = [
    { path: '', component: welcome_component_1.WelcomeComponent },
    { path: 'feedback', component: feedback_component_1.FeedbackComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map