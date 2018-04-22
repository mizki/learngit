function floatWindow(Video) {
    function visable() {
        var a = Video.offsetTop;
        if (a >= $(window).scrollTop() && a < ($(window).scrollTop() + $(window).height())) {
            return true;

        }
        else {
            return flase;
        }
    }

    this.close = document.createElement("img");
    this.close.src = "关闭.png";
    this.close.className = "close";
    this.close.addEventListener("click", function close() {
        self.close.style.display = "none";
    });
    var self = this;
    window.addEventListener('scroll', function () {
        if (!visable()) {
            Video.setClassName("float");
            Video.appendChild(self.close);
        }
        else {
            Video.backClassName();
            close();
        }

    });
    window.onload = function () {
        var drag;
        var x, y;
        var ele = Video.div;

        ele.onmousedown = function (evt) {
            _event = evt || window.event;
            target = _event.target || _event.srcElement;
            x = _event.clientX - target.offsetLeft;
            y = _event.clientY - target.offsetTop;
            drag = target;
        };

        document.onmousemove = function (evt) {
            if (drag) {
                _event = evt || window.event;

                var left = _event.clientX - x;
                var top = _event.clientY - y;
                body = document.documentElement || document.body;
                if (left < 0) left = 0;
                if (left > body.offsetWidth - drag.offsetWidth) left = body.offsetWidth - drag.offsetWidth;
                if (top < 0) top = 0;
                if (top > (body.offsetHeight - drag.offsetHeight)) top = (body.offsetHeight - drag.offsetHeight);

                drag.style.cursor = 'move';
                drag.style.left = left + 'px';
                drag.style.top = top + 'px';
            }
        };

        document.onmouseup = function (evt) {
            if (drag) {
                drag.style.cursor = '';
            }
            drag = null;
        }

    }

}
