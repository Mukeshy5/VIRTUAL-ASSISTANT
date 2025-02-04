// access the all function
let btn =document.querySelector("#btn")
let content=document.querySelector("#content")
let Voice =document.querySelector("#Voice")

// speak command
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1.1
    text_speak.volume=1
    text_speak.lang="hi-GN"
    window.speechSynthesis.speak(text_speak)
}
// day timing updates.............................................
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours <12){
         speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
// talk with voice command.....................................
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    // console.log(event);
    
    takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    Voice.style.display="block"// there are the function are not defined propblem
} ) 
// hide gif and btn or show function................
function takecommand(massage){
    btn.style.display="flex"
    Voice.style.display="none"
// take commannd and conversation with the assistant......................

    if(massage.includes("hello")||massage.includes("hey")){
        speak("hello sir, what can i help you?")
    }
    // time function
    else if(massage.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }//date function
    else if(massage.includes("date")){
        let time=new Date().toLocaleString(undefined,{day:"numeric",month:"numeric"})
        speak(time)
    }
    else if(massage.includes("who are you")){
        speak("I am virtual Assistant,Created by Mukesh sir")
        
    }else if(massage.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")

    }else if(massage.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.co.in/","_blank")
    
    // create to advance of a jack vartual assiatent by google.................................
    }else{
        let finalText="This is What i found on internet regarding"+massage.replace("jack","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${massage.replace("jack","")}`,"_blank")
    }

}   
