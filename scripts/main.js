$(".header-button").on("click", header_oc);
$(".header-one").on("click", header_one);
$(".header-two").on("click", header_two);
$(".header-three").on("click", header_three);
$(".header-four").on("click", header_four);
$(".main-one").on("click", main_one);
$(".main-two").on("click", main_two);
$(".main-three").on("click", main_three);
$(".dark-mode-button").on("click", dark_mode);
$(".home-button").on("click", header_one)

var header_oc_check = 0;

var dark_mode_check = 0;

function header_oc() {
    if (header_oc_check == 0) {
        $("header").css("width", "calc(100vw + 600px)");
        $(".header-content").css("opacity", "1");
        $(".border-one").css("opacity", "0");
        $(".border-two-one").css("transform", "translate(-50%,-50%) rotateZ(45deg)");
        $(".border-two-two").css("transform", "translate(-50%,-50%) rotateZ(-45deg)");
        $(".border-three").css("opacity", "0");
        header_oc_check = 1;
    } else {
        $("header").css("width", "100vw");
        $(".header-content").css("opacity", "0");
        $(".border-one").css("opacity", "1");
        $(".border-two-one").css("transform", "translate(-50%,-50%)");
        $(".border-two-two").css("transform", "translate(-50%,-50%)");
        $(".border-three").css("opacity", "1");
        header_oc_check = 0;
    }
}

function header_close_open() {
    $("header").css("width", "200vw");
    $(".header-content").css("opacity", "0");
    $(".border-one").css("opacity", "1");
    $(".border-two-one").css("transform", "translate(-50%,-50%)");
    $(".border-two-two").css("transform", "translate(-50%,-50%)");
    $(".border-three").css("opacity", "1");
    var timer_header_close_open = setInterval(header_close, 1000);

    function header_close() {
        $("header").css("width", "100vw");
        clearInterval(timer_header_close_open);
        header_oc_check = 0;
    }
}

function main_one() {
    header_close_open();
    var timer_main_one = setInterval(main_one_open, 500);

    function main_one_open() {
        $(".content-one").css("width", "100%");
        $(".content-one").css("height", "100%");
        $(".content-one").css("opacity", "1");
        clearInterval(timer_main_one);
    }
}

function main_two() {
    header_close_open();
    var timer_main_two = setInterval(main_two_open, 500);

    function main_two_open() {
        $(".content-two").css("width", "100%");
        $(".content-two").css("height", "100%");
        $(".content-two").css("opacity", "1");
        clearInterval(timer_main_two);
    }
}

function main_three() {
    header_close_open();
    var timer_main_three = setInterval(main_three_open, 500);

    function main_three_open() {
        $(".content-three").css("width", "100%");
        $(".content-three").css("height", "100%");
        $(".content-three").css("opacity", "1");
        clearInterval(timer_main_three);
    }
}

function header_one() {
    header_close_open();
    var timer_header_one = setInterval(main_one_close, 500);

    function main_one_close() {
        $(".content-one").css("width", "0");
        $(".content-one").css("height", "0");
        $(".content-one").css("opacity", "0");
        $(".content-two").css("width", "0");
        $(".content-two").css("height", "0");
        $(".content-two").css("opacity", "0");
        $(".content-three").css("width", "0");
        $(".content-three").css("height", "0");
        $(".content-three").css("opacity", "0");
        clearInterval(timer_header_one);
    }
}

function header_two() {
    main_one();
    var timer_header_one = setInterval(main_one_close, 400);

    function main_one_close() {
        $(".content-one").css("width", "0");
        $(".content-one").css("height", "0");
        $(".content-one").css("opacity", "0");
        $(".content-two").css("width", "0");
        $(".content-two").css("height", "0");
        $(".content-two").css("opacity", "0");
        $(".content-three").css("width", "0");
        $(".content-three").css("height", "0");
        $(".content-three").css("opacity", "0");
        clearInterval(timer_header_one);
    }
}

function header_three() {
    main_two();
    var timer_header_one = setInterval(main_one_close, 400);

    function main_one_close() {
        $(".content-one").css("width", "0");
        $(".content-one").css("height", "0");
        $(".content-one").css("opacity", "0");
        $(".content-two").css("width", "0");
        $(".content-two").css("height", "0");
        $(".content-two").css("opacity", "0");
        $(".content-three").css("width", "0");
        $(".content-three").css("height", "0");
        $(".content-three").css("opacity", "0");
        clearInterval(timer_header_one);
    }
}

function header_four() {
    main_three();
    var timer_header_one = setInterval(main_one_close, 400);

    function main_one_close() {
        $(".content-one").css("width", "0");
        $(".content-one").css("height", "0");
        $(".content-one").css("opacity", "0");
        $(".content-two").css("width", "0");
        $(".content-two").css("height", "0");
        $(".content-two").css("opacity", "0");
        $(".content-three").css("width", "0");
        $(".content-three").css("height", "0");
        $(".content-three").css("opacity", "0");
        clearInterval(timer_header_one);
    }
}

function dark_mode() {
    if (dark_mode_check == 0) {
        $("body").css("background-color", "rgb(40,40,40)");
        $(".content-one").css("background-color", "rgb(40,40,40)");
        $(".content-two").css("background-color", "rgb(40,40,40)");
        $(".content-three").css("background-color", "rgb(40,40,40)");
        $(".txt").css("color", "white");
        $(".dark-mode-off-op").css("opacity", "0");
        $(".dark-mode-on-op").css("opacity", "1");
        dark_mode_check = 1;
    } else {
        $("body").css("background-color", "white");
        $(".content-one").css("background-color", "white");
        $(".content-two").css("background-color", "white");
        $(".content-three").css("background-color", "white");
        $(".txt").css("color", "black");
        $(".dark-mode-on-op").css("opacity", "0");
        $(".dark-mode-off-op").css("opacity", "1");
        dark_mode_check = 0;
    }
}