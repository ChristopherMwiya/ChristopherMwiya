//                       MODEL

const button = document.querySelector('.user-btn');
const user_input = document.querySelector('.user-msg');
const text_area = document.querySelector('.text-area');
const login_btn = document.querySelector('.login');
let login_area = document.querySelector('.login-area');
const input_name = document.querySelector('.user-login-name');
let instructions = document.querySelector('.instructions');
const instructions_btn = document.querySelector('.instructions-btn');
const display_instructions = () => {
    instructions.style = 'block';
}

const display_none_instructions = () => {
    instructions.style.display = 'none'
}
var sec = 0;
let submit = document.querySelector('.submit');
const displays_login = ()=>{
    login_area.style = 'display:block'
    sec++;
    console.log('sec add too');
    console.log(sec);
}
const displays_none = () => {
    
    login_area.style = 'display:none'
}

let user_messages = [];
let doYouKnow = () => {
    
    let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = 'Do you know that you can also login so that your name can be displayed !';
        text_area.appendChild(container)
    
    
}
const render = () => {
    
      text_area.innerHTML = '';
    user_messages.forEach( item => {
    
        let container = document.createElement('div')
        let user_name = document.createElement('div');
        let user_message = document.createElement('div')
        user_name.setAttribute('class','user-name')
        user_message.setAttribute('class','user-message')
        container.setAttribute('class','msg-container')
        container.append(user_name,user_message)
        user_name.innerText = item.user_name;
        user_message.innerText = item.user_message;
        text_area.appendChild(container)
    })

} 

const send_message = () => {
    user_messages.push({
        user_name:'@' + input_name.value,
        user_message:user_input.value
    })
    user_input.innerHTML = '';
    render();
    window.setTimeout(reply,2000)   
    if(sec > 0){
        
    
    } else {
        window.setTimeout(doYouKnow,5000)
    }
    
    text_area.style = 'display:block';
}


function reply() {
    
    let wordsToCheck = ['HOW','WHY','WHAT','HISTORY'];
    let sentence = user_input.value.toUpperCase();
   
       
   
    if (sentence.includes('HOW')) {
        
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = replies[0];
        text_area.appendChild(container)
            
    } else if (sentence.includes('WHY')) {
        
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = replies[1];
        text_area.appendChild(container)
        


    } else if (sentence.includes('WHAT')) {
        
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = replies[2];
        text_area.appendChild(container)
        


    } else if (sentence.includes('HISTORY')) {
        
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = replies[3];
        text_area.appendChild(container)
        


    } else if (sentence.includes('HOWAREYOU')) {
    
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class', 'bot-name')
        bot_message.setAttribute('class', 'bot-message')
        container.setAttribute('class', 'msg-bot-container')
        container.append(bot_name, bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = 'no need to know how iam just ask a question';
        text_area.appendChild(container)
    
    
    
    } else {
        
        
        let container = document.createElement('div')
        let bot_name = document.createElement('div');
        let bot_message = document.createElement('div')
        bot_name.setAttribute('class','bot-name')
        bot_message.setAttribute('class','bot-message')
        container.setAttribute('class','msg-bot-container')
        container.append(bot_name,bot_message)
        bot_name.innerText = '@Christopher';
        bot_message.innerText = 'Please follow the instructions, they are very simple';
        text_area.appendChild(container)
        


    }
   
    user_input.value = '';
}





//                       VIEW
    render();

//                       CONTROLLER

button.onclick = send_message;
login_btn.onclick = displays_login;
submit.onclick = displays_none;
user_input.onkeydown = display_none_instructions;
instructions_btn.onclick = display_instructions;