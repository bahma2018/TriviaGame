//Start Button with an onClick function that will run the game


//At the start of the game, a timer will start counting down the seconds
var number = 60;

var rightAns = 0;

var wrongAns = 0;

var intervalId;

var finished = false;

function start() {

    $("#game").hide();
    $("#results-text").hide();


}



start();

function run() {
    if (!finished) {

        $("#results-text").hide();
        $("#game-start").hide();
        $("#game").show();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

    };
}

//var NoRight = 0;
//if (document.input.color[2].checked == true)++NoRight;

$("#start-button").on("click", run);

$("input").on("click", function counter() {


    var checkedAns = $("input:checked").val();

    if (checkedAns === "correct") {
        rightAns++
    }



});



function decrement() {

    number--;

    $("#timer").html("<h2>" + "Seconds Left: " + number + "</h2>");


    if (number === 0) {

        finished = true;

        stop();

        alert("Time Up!");

    }


}



$("#done-button").on("click", stop);

wrongAns = 6 - rightAns;

function stop() {

    clearInterval(intervalId);


    results();
}



function results() {
    $("#game").hide();
    $("#results-text").show();
    $("#right-answer-text").append("Answers Correct: " + rightAns);
    $("#wrong-answer-text").append("Answers Incorrect: " + (6 - rightAns));

}
//the questions will all appear with true or false answers beneath them

//User will only pick one answer per question

//if user's guess equal correct answer, correct count will increase by 1
//else, incorrect count will increase by one

//After timer reaches Zero, else, the user clicks "done" the game will clear the questions, and display the results