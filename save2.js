// Javascript for save2
// Author: funmbia 

function check() {
    window.location.href = "index.html"
} function rand() {
    window.location.href = "save2.html"
} function personal() {
    window.location.href = "save3.html";
}

//BUTTON FUNCTIONS
function generate() {
    document.getElementById("generated").style.display= "block"; 
    //CAN/SHOULD BE REPLACED WITH DICTIONARY API for better range & proetection
    const words = [
        "Orange", "Purple", "Violet", "Magenta", "Yellow",
        "Forest", "OuterSpace", "Oceans", "Mountain", "Valley",
        "Bookshelf", "Guitar", "Vioin", "Mattress",
        "JavaScript", "Coding", "Programming", "Python",
        "Romance", "Horror", "Mystery", "ScienceFiction", "Comedy", "Suspense", "PeriodPiece", "Documentary", "Reality",
        "Church", "School", "Arcade", "Theatre", "Campus", "Mosque", "Shrine"
    ];
      
    var word = addChar( words[ Math.floor(Math.random() * words.length) ]); //addChar to a random word
    var randNum = Math.floor(Math.random() * 89) + 10;

    generated = randNum%2==0 ? (word + randNum) : (randNum + word);

    document.getElementById("generated").innerHTML = generated;
    document.getElementById("key").innerHTML = key(generated);
}

function another() {
    const questions = [
        "A sibling's middle name",
        "The middle school you attended",
        "Your favorite food",
        "Your favorite Canadian Artist",
        "The name of your place of worship",
        "Favorite song from childhood",
        "An instrument you play", 
        "Mother's maiden name",
        "Favourite Micheal Jackson song"
    ];

    var rand = Math.floor(Math.random() * questions.length);

    document.getElementById("question").innerHTML = questions[rand];
}

function generate2() {
    var generated;
    document.getElementById("generated").style.display= "block";
    var ans = document.getElementById("answer").value;
    if(ans == '') {
        document.getElementById("generated").innerHTML = "Please enter an answer";
        return;
    }
    ans = ans.charAt(0).toUpperCase() + ans.slice(1).toLowerCase();
    var word = addChar(ans.replace(/\s/g, ''));
    var randNum = Math.floor(Math.random() * 89) + 10;

    while (word.length < 6) {
        word = word + randNum;
    }
    randNum%2==0 ? generated = word + randNum : generated = randNum + word;

    document.getElementById("generated").innerHTML = generated;
    document.getElementById("key").innerHTML = key(generated);
}

//HELPER FUNCTIONS
function addChar(word) {
    //! = i     # = e   @ = a   * = o   $ = everything else

    if (word.includes("i")) {
        return word.replace(/i/g, '!');
    }
    if (word.includes("e")) {
        return word.replace(/e/g, '#');
    }
    if (word.includes("a")) {
        return word.replace(/a/g, '@');
    }
    if (word.includes("o")) {
        return word.replace(/o/g, '*');
    }
    else {
        return word;
    }
}

function key(password){
    var a, b;
    if (password.includes('@')) {
        a = 'a'; b = 'a';
    } else if (password.includes('#')) {
        a = 'e'; b = '#';
    } else if (password.includes('!')) {
        a = 'i'; b = '!';
    } else if (password.includes('*')) {
        a = 'o'; b = '*';
    } else {
        a = "third word"; b = '$';
    }

    return"For remembrance, note that the " + a + "(s) in your generated word is replaced by a/an " + b;
}



