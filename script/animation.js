export function typingText(text, html)
{
    let pause = false
    let i = 0
setInterval(() =>{
    if(!pause){
        html.innerHTML += text.split("")[i]
        i++
        if(i == text.split("").length)
        {
            i = 0;
            pause = true;
            setTimeout(() =>{
                pause = false;
                html.innerHTML = ""
                i = 0
            }, 7500)
        }
    }
}, 100)
}