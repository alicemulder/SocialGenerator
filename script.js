var the_event = [
        "David Bowie has died",
        "Istanbul attacked by IS",
        "Actor Alan Rickman past away",
        "IS attacks Paris",
        "Terror attacks on Charlie Hebdo",
        "Lemmy Kilmister died of cancer",
        "Discriminating lyrics sang during footballmatch",
        "Children died of famine in Syrian city of Madaya",
        "Donald Trump says something annoying again"
    ],
    the_answer = [
        "post a musicvideo",
        "change my profile picture",
        "post an emotional personal story about it",
        "post lyrics of a deep, intelligent song",
        "repost an illustration of which no one knows who made it anymore",
        "post a photo of that",
        "retweet something a famous person posted on this",
        "post a photo with a 'heartbreaking' quote on it",
        "write an angry text on the lack of involvement of politicians",
        "post a funny catvideo",
        "write something including the relevant trending hashtag"
    ],
    colors = [
        "AntiqueWhite",
        "BurlyWood",
        "CornflowerBlue",
        "Coral",
        "Crimson",
        "DarkKhaki",
        "DarkOliveGreen",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "LightBlue",
        "Gainsboro",
        "Gold",
        "Khaki",
        "LightSkyBlue",
        "LightSteelBlue",
        "Orange",
        "Peru",
        "RosyBrown",
        "Tan",
        "YellowGreen"
    ];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSocialMedia() {
    var i = getRandomInt(0, the_event.length - 1),
        j = getRandomInt(0, the_answer.length - 1);

    console.log('event: ' + i + ', answer: ' + j);

    document.getElementById('event').innerHTML = the_event[i];
    document.getElementById('answer').innerHTML = the_answer[i];

    // document.body.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255)+ ',' + getRandomInt(0, 255) + ')';
    document.body.style.backgroundColor = colors[getRandomInt(0, colors.length - 1)];
}

function init() {
    getSocialMedia();

    window.addEventListener('keyup', function(event) {
        // console.log(event.keyCode);
        getSocialMedia();
    });
}