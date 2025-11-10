let msg_area = document.getElementById("msg_area")
let input = document.getElementById("typing-area");
let send_button = document.getElementById("send");

let botReplies = [
    "Hello.",
    "Main badhiya tum Kaise ho?",
    "Kya kar rahe ho?",
    "Acha",
    "Mujhe sunao!",
    "Waah, interesting!😂😂",
    "Or ghar m sab badhiya"

];

let botIndex = 0;


send_button.addEventListener("click", () => {

    // jo use krega uska msg
    let msg = input.value;
    console.log(msg);
    let user_msg = document.createElement("div");
    user_msg.textContent = msg;
    user_msg.classList.add("user-bubble");  
    msg_area.appendChild(user_msg);
    input.value = ""; 
    
    //bot ka msg
  setTimeout(() => {
    if(botIndex < botReplies.length) {
     let bot_msg = document.createElement("div");
     bot_msg.textContent = botReplies[botIndex];
     bot_msg.classList.add("bot-bubble");  
     msg_area.appendChild(bot_msg);
     botIndex++ // isse next p jayega ekdam i++ jaise 
    }    
  }, 1000);


});

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        send_button.click(); // click function call
    }
});


