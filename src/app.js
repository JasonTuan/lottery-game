var rouletter0 = $('div.numbers-0');
var rouletter1 = $('div.numbers-1');
var rouletter2 = $('div.numbers-2');

var isProgress = false;
var numberFinish = {
    num0: null,
    num1: null,
    num2: null,
};

var soundBg = new Howl({
    src: ['sound/xoso.mp3']
});

var soundDone = new Howl({
    src: ['sound/done.mp3']
});

var option0 = {
    speed: 20,
    duration: 6,
    stopImageNumber: -1,
    stopCallback: function ($stopElm) {
        numberFinish.num0 = $stopElm.data("number");
        markDone();
    }
}
rouletter0.roulette(option0);

var option1 = {
    speed: 10,
    duration: 4,
    stopImageNumber: -1,
    stopCallback: function ($stopElm) {
        numberFinish.num1 = $stopElm.data("number");
        markDone();
    }
}
rouletter1.roulette(option1);

var option2 = {
    speed: 30,
    duration: 6,
    stopImageNumber: -1,
    stopCallback: function ($stopElm) {
        numberFinish.num2 = $stopElm.data("number");
        markDone();
    }
}
rouletter2.roulette(option2);

function markDone() {
    if (numberFinish.num0 === null || numberFinish.num1 === null || numberFinish.num2 === null) {
        return;
    }
    isProgress = false;
    soundBg.stop();
    soundDone.play();
    $(".result-number").text(numberFinish.num0 + "" + numberFinish.num1 + "" + numberFinish.num2);
    $(".result-box").show();
    numberFinish = {
        num0: null,
        num1: null,
        num2: null,
    };
}

$('.lottery-numbers').click(function () {
    if (isProgress) {
        return;
    }
    isProgress = true;
    soundBg.play();
    soundDone.stop();
    rouletter0.roulette('start');
    rouletter1.roulette('start');
    rouletter2.roulette('start');
});

$('.result-girl').click(function () {
    $(".result-box").hide();
    $(".result-number").text("000");
});