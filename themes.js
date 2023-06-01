
const mode_sombre = document.getElementById("mode_sombre");

const containair = document.querySelector(".containair");
const instant_chat = document.querySelector("#instant_chat");
const room_input = document.querySelector("#room_input");

const my_room = document.querySelector(".my_room");
const my_room_after = document.querySelector(".my_room_after");
const room_name1_1 = document.querySelector(".room_name1");
const room_name1_2 = document.querySelector(".room_name2");

const header1 = document.querySelector("#header");
const room_name2 = document.querySelector("#room_name");
const mode_sombre_button_style = document.querySelector("#mode_sombre");

const mode_sombre_intern_boule = document.querySelector("#mode_sombre_boule");
const input_discuss2 = document.querySelector("#input_discuss");
const themes = document.querySelector(".themes");


mode_sombre.addEventListener("click", function(){
    setTimeout(() => {
    containair.classList.toggle("containair1");
    instant_chat.classList.toggle("instant_chat");
    room_input.classList.toggle("room_input");
    
    my_room.classList.toggle("my_room1");
    my_room_after.classList.toggle("my_room_after1");
    room_name1_1.classList.toggle("room_name1_1");
    room_name1_2.classList.toggle("room_name1_2");
    
    header1.classList.toggle("header1");
    room_name2.classList.toggle("room_name2");
    mode_sombre_button_style.classList.toggle("mode_sombre");
    
    mode_sombre_intern_boule.classList.toggle("mode_sombre_boule");
    input_discuss2.classList.toggle("input_discuss2");
    themes.classList.toggle("themes1")}, 250)
})

const div_in_the_forest = document.getElementById('div_in_the_forest');

const discussion = document.querySelector('.discussion');

div_in_the_forest.addEventListener('click', function(){
    discussion.classList.toggle('discussion1');
})
