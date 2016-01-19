var the_event = [
        "David Bowie has died",
        "Istanbul attacked by IS",
        "Actor Alan Rickman past away",
        "IS attacks Paris",
        "Terror attacks on Charlie Hebdo"
    ],
    the_answer = [
        "post a musicvideo",
        "change my profile picture",
        "post an emotional personal story about it",
        "post lyrics of a deep, intelligent song",
        "repost an illustration of which no one knows who made it anymore",
        "post a photo of that"
    ];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init() {

    getSocialMedia();

    window.addEventListener('keyup', function(event) {
        console.log(event.keyCode);

        if (event.keyCode == 13) {
            getSocialMedia();
        }
    });
}

function getSocialMedia() {

    var i = getRandomInt(0, the_event.length - 1),
        j = getRandomInt(0, the_answer.length - 1);


    console.log('event: ' + i + ', answer: ' + j);

    document.getElementById('event').innerHTML = the_event[i];
    document.getElementById('answer').innerHTML = the_answer[i];

    //totaal random kleuren
    document.body.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255)+ ',' + getRandomInt(0, 255) + ')';
}
