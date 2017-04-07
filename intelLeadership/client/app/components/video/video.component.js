"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var VideoComponent = (function () {
    function VideoComponent() {
        this.id = 'HxEntJiIEd0';
        this.id2 = 'XxKJ4R99VCo';
        this.id3 = 'YVMBJ9kvl2g';
        this.id4 = 'VpKvQg5qRgk';
        this.id5 = 'EdR9XDhmE-A';
        this.id6 = '6U53QTun-w4';
    }
    VideoComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    VideoComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    VideoComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    VideoComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    core_1.Component({
        selector: 'videoPlayer',
        template: "\n        <h3>Some motivational videos</h3>\n\n        <youtube-player \n            [videoId]=\"id\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>\n\n        <youtube-player \n            [videoId]=\"id2\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>\n          \n          <youtube-player \n            [videoId]=\"id3\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>\n          \n          <youtube-player \n            [videoId]=\"id4\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>\n          \n          <youtube-player \n            [videoId]=\"id5\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>\n          \n          <youtube-player \n            [videoId]=\"id6\" \n            (ready)=\"savePlayer($event)\"\n            (change)=\"onStateChange($event)\">\n          </youtube-player>  "
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map