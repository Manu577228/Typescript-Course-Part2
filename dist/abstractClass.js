"use strict";
//Abstract class
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculation
        return 8;
    }
}
class InstagramApp extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const mb = new InstagramApp("test", "test", 3);
mb.getReelTime();
