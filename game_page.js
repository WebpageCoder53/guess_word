player1_name = localStorage.getItem("name1");
player2_name = localStorage.getItem("name2");
player1_score = 0;
player2_score = 0;
question_turn = "player1";
answer_turn = "player2";

document.getElementById("name1").innerHTML = player1_name + ": 0";
document.getElementById("name2").innerHTML = player2_name + ": 0";
document.getElementById("player_question").innerHTML = "Question turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player2_name;

function sendWord() {
    get_word = document.getElementById("guess").value;
    word_lower = get_word.toLowerCase();
    console.log("word in lowercase: " + word_lower);
    chars = [];
    chars.push(word_lower.charAt(1));

    length_half = Math.floor(word_lower.length / 2);
    chars.push(word_lower.charAt(length_half));

    length_1 = word_lower.length - 1;
    chars.push(word_lower.charAt(length_1));
    console.log(chars);

    var remove = ((word_lower.replace(chars[0], "_")).replace(chars[1], "_")).replace(chars[2], "_");
    console.log(remove);

    question_word = "<h4 id='word_display'>Q. "+ remove + "</h4>";
    input_box = "<br> Answer: <input type='text' id='input_textbox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("guess").value = "";
}

function check() {
    get_answer = document.getElementById("input_textbox").value;
    answer = get_answer.toLowerCase();
    console.log("answer in lowercase: " + answer);
    if(answer == word_lower) {
        if(answer_turn == "player1") {
            player1_score++;
            document.getElementById("name1").innerHTML = player1_name + ": " + player1_score;
        } else {
            player2_score++;
            document.getElementById("name2").innerHTML = player2_name + ": " + player2_score;
        }
    }
    if(question_turn == "player1") {
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn: " + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer turn: " + player1_name;
    } else {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Answer turn: " + player2_name;
        document.getElementById("player_answer").innerHTML = "Question turn: " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}