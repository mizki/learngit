function MyVideo(container, options) {

    this.imgPlay = document.createElement("img");
    this.imgMusic = document.createElement("img");
    this.imgScreen = document.createElement("img");
    this.progress1 = document.createElement("progress");
    this.progress2 = document.createElement("progress");
    this.div = document.createElement("div");
    this.diVideo = document.createElement("div");
    this.Video = document.createElement("video");
    this.control = document.createElement("div");
    this.timeP = document.createElement("p");
    this.div.className = "div";
    if (options.width) {
        this.Video.style.width = options.width;
    }
    else {
        this.Video.style.width = "50%";
    }
    if (options.height) {
        this.Video.style.height = options.height;
    }
    else {
        this.Video.style.height = "50%";
    }
    if (options.playSpeed) {
        this.Video.playbackRate = options.playSpeed;
    }
    else {
        this.Video.playbackRate = 1;
    }

    if (options.src) {
        this.Video.src = options.src;
    }
    else {
        console.log("get wrong src");
    }

    this.progress1.className = "progress1";
    this.progress2.className = "progress2";
    this.imgMusic.className = "img";
    this.imgPlay.className = "img";
    this.imgScreen.className = "img";
    /*this.progress1.style.width=(this.Video.style.width)*0.5;
    this.progress2.style.width=(this.Video.style.width)*0.2;
    this.progress1.style.height=(this.Video.style.height)*0.1;
    this.progress2.style.height=(this.Video.style.height)*0.1;
    this.imgPlay.style.width=(this.Video.style.width)*0.1;
    this.imgMusic.style.width=(this.Video.style.width)*0.1;
    this.imgScreen.style.width=(this.Video.style.width)*0.1;*/
    this.progress1.max = this.Video.duration;
    this.progress2.max = 100;
    this.imgPlay.src = "file:///D:/bilibili/播放器-播放（小电视）.png";
    this.imgMusic.src = "file:///D:/bilibili/音量-.png";
    this.imgScreen.src = "file:///D:/bilibili/全屏.png";
    /*this.imgPlay.style.height=(this.Video.style.height)*0.1;
    this.imgMusic.style.height=(this.Video.style.height)*0.1;
    this.imgScreen.style.height=(this.Video.style.height)*0.1;*/
    this.Video.autoplay = "none";
    this.Video.controls = "none";
    var self = this;
    this.progress1.addEventListener('click', function (event) {
        self.progress1.value = event.offsetX / self.progress1.style.width * self.progress1.max;
        Video.currentTime = event.offsetX / self.progress1.style.width * self.Video.duration;
    });
    this.progress2.addEventListener('click', function (event) {
        self.progress2.value = event.offsetX / self.progress2.style.width * self.progress2.max;
        self.Video.volume = event.offsetX / self.progress2.style.width;
    });
    setInterval(function () {

        if (!self.Video.paused) {
            self.progress1.value++;
        }
        self.timeP.innerHTML = parseInt(self.Video.currentTime / 60) + ":" + Math.round(self.Video.currentTime % 60) + "/" + parseInt(self.Video.duration / 60) + ":" + Math.round(self.Video.duration % 60);
    }, 1000);

    this.imgPlay.onclick = function () {
        if (self.Video.pause) {
            self.Video.play();
            self.imgPlay.src = "file:///D:/bilibili/播放器-暂停（小电视）.png";
        }
        else {
            self.Video.pause();
            self.imgPlay.src = "file:///D:/bilibili/播放器-播放（小电视）.png";
        }
    };
    this.imgScreen.onclick = function () {


        if (self.Video.requestFullscreen) {
            self.Video.requestFullscreen();
        }
        //FireFox
        else if (self.Video.mozRequestFullScreen) {
            self.Video.mozRequestFullScreen();
        }
        //Chrome等
        else if (self.Video.webkitRequestFullScreen) {
            self.Video.webkitRequestFullScreen();
        }
        //IE11
        else if (self.Video.msRequestFullscreen) {
            self.Video.msRequestFullscreen();
        }
    };
    document.onkeydown = function (event) {
        if ((event.keyCode === 27) && (document.webkitIsFullScreen)) {
            document.exitFullscreen();
        }
    };
    this.diVideo.appendChild(this.Video);
    this.control.appendChild(this.imgPlay);
    this.control.appendChild(this.progress1);
    this.control.appendChild(this.timeP);
    this.control.appendChild(this.imgMusic);
    this.control.appendChild(this.progress2);
    this.control.appendChild(this.imgScreen);
    this.div.appendChild(this.diVideo);
    this.div.appendChild(this.control);
    container.appendChild(this.div);

    function getCurrentTime() {
        return self.Video.currentTime;
    }

    function getInputInner() {
        var val = self.input.value;
        self.input.value = "";
        return val;

    }

    function getSrc() {
        return self.Video.src;
    }

    function setClassName(str) {
        self.div.className = str;
    }

    function backClassName() {
        self.div.classname = "div";
    }
}

