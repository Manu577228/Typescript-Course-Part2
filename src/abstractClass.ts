//Abstract class

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void
    getReelTime(): number {
        //some calculation
        return 8
    }
}

class InstagramApp extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const mb = new InstagramApp("test", "test", 3)

mb.getReelTime()

export {}


