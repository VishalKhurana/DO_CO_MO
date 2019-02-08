$(document).ready(()=>{
    var socket=io.connect('http://localhost:5000/')
    let chat_box=$('#chat_box')
    let output=$('#output')
    let window=$('#window')
    let text=$('#text_message')
    let send=$('#send')
    let handler_d=$('#handler_d')
    let hide=$('#hide')
    let show=$('#show')
    window.hide();
    
    hide.click(()=>{
        window.hide();
        show.show();
                
    })
    show.click(()=>{
        console.log("show")
        show.hide();
        window.show();
    })

    send.click(()=>{
        socket.emit('chat',{
            handler:handler_d.val(),
            message:text.val()
        });
        text.val('');    
    })
    
    socket.on('chat',function(data)
    {
     output.append(`<p><strong>${data.handler}:</strong>${data.message}</p>`)
    })
    window.append(output)
    
    
    
    
    
    })
    