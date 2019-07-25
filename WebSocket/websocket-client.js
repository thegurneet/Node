const WS = new WebSocket('ws://localhost:3232'); 


WS.onmessage = function(payload){
    console.log(payload.data + 'hi');
}

WS.onopen = ()=>{
    displayTitle('CONNECTION OPEN')
    console.log('CONNECTION OPEN')
}

WS.onclose =()=>{
    displayTitle('CONNECTION CLOSED')

    console.log('CONNECTION IS CLOSED')
}

function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

document.forms[0].onsubmit = function(){
    let input = document.getElementById('message');
  //  console.log(input.value);
    WS.send(input.value)
}