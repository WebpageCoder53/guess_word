function login_users() {
    name1 = document.getElementById("player1_name_input").value;
    name2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);

    window.location = "game_page.html";
}