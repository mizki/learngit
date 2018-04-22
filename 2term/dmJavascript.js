function DMVideo(myVideo, options) {
    this.div = document.createElement("div");
    this.div.className = "div";
    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.className = "input";
    this.input.value = "在这里发送弹幕哟~";
    this.button = document.createElement("button");
    this.button.className = "button";
    this.button.innerHTML = "发送 >";
    // this.button.onclick = addDm();
    this.button.addEventListener('click', addDm);
    var i;
    this.object = [];
    var self = this;
    for (i = 0; i < options.object.length; i++) {
        sendDm(options.object[i]);
    }

    function sendDm(object) { //用于添加弹幕的函数
        var Dm;
        Dm = document.createElement("div");
        Dm.className = "dm";
        Dm.inner = object.inner;
        Dm.color = object.color;
        Dm.style.height = random() * 100 + "%";
        addEventListener("ontimeupdate", function () {
            if (myVideo.getCurrentTime() === object.time) {
                myVideo.appendChild(Dm);
                Dm.style.cssFloat = "left";
                if (Dm.style.left === "0") {
                    Dm.style.display = "none";
                }

            }
        });
    }

    function addDm() {
        var Dm;
        Dm.inner = myVideo.getInputInner();
        Dm.time = myVideo.getCurrentTime();
        sendDm(Dm);
    }


}


