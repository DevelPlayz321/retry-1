player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    get_word = get_word.toLowerCase();
    ch1 = get_word.charAt(1);
    console.log(ch1);
    l = get_word.length;
    ch2 = get_word.charAt(l / 2);
    console.log(ch2);
    ch3 = get_word.charAt(l - 1);
    console.log(ch3);
}
