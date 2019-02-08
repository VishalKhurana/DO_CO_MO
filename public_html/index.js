var counting=0;
function incre(count)
{
  count+=1;
  return count;
}
var inc=0;
$(document).ready(()=>{
  
  
counting=counting+1;
  
  //count+=1;
  
  let p=0;
  let s=0;
  let r=0;
  function rets(s)
  {
    let m=s;
    if(m>=2)
    {
      m=m-1;
    }
   
     $('#aaya').remove();
     //$(`<div id="aaya">Token Number:${m}</div>`)

     arrived.append($(`<div id="aaya">Token Number:${m}</div>`))
     //big_div.append(arrived)
 
  }
     
     
    
     let add_patient_btn=$('#add_pat')
     let add_pat_div=$('#add_pat_div')
     let add_pat_sub=$('#add_pat_submit')
     let add_pat_name=$('#add_pat_name')
     let add_pat_title=$('#add_pat_disease')
     let add_pat_fees=$('#add_pat_fees')
     let add_pat_test=$('#add_pat_test')
     let arrived=$('#doctor_arrived')
     let da=$('#ddaa')
     let hide=$('#add_pat_hide')
     //let date=$('#date')
 
    
     let big_div=$('#big_div')
     let outer_div=$('#outer_div')
     let un=$('#un')
 
     add_pat_div.hide()
     
     add_patient_btn.click(()=>{
         add_pat_div.show()
 
     })
     hide.click(()=>{
      add_pat_div.hide()
     })
     
   
    
 
     add_pat_sub.click(()=>{
         inc=inc+1;
         var date = new Date($('#date').val());
         day = date.getDate();
         month = date.getMonth() + 1;
         year = date.getFullYear();
         let date_op=([day, month, year].join('/'));
         //console.log(date_op)
         var data={
             name:add_pat_name.val(),
             title:add_pat_title.val(),
             fees:add_pat_fees.val(),
             test:add_pat_test.val(),
             date:date_op,
             token:inc,
             phone:$('#add_pat_phone').val()
       
           }

           console.log(data)
           console.log($('#add_pat_phone').val())
          
 
           
         $.post("/patients",data,
         function(data,status){
           alert("Data: " + data + "\nStatus: " + status);
         });
         un.append($(`<li id="lij">Name:${add_pat_name.val()}</li>`).addClass("list-group-item font-weight-bold").css("background-color","pink").append($(`<div> title:${add_pat_title.val()}<br>
         fees:${add_pat_fees.val()}<br>
         
         token:${inc}<br>Phone Number:${$('#add_pat_phone').val()}
   </div>`).hide()).append($(`<button>+</button>`).addClass("btn btn-secondary mx-2").click((ev)=>{
             console.log("we r in")
 
            if(p==0)
            {
             var $this=$(ev.target.parentElement)
             $this.find('div').show()
             $this.find('button').text("-")
 
             p=1;
            }
            else{
             var $this=$(ev.target.parentElement)
             $this.find('div').hide()
             $this.find('button').text("+")
             p=0;
            }
 
         }
 
         )))
         outer_div.append(un)
        
         big_div.append(outer_div)
 
         add_pat_div.hide()
         add_pat_name.val('')
         add_pat_fees.val('')
         add_pat_title.val('')
         add_pat_test.val('')
         $('#add_pat_phone').val('')
 
 
       });
       da.click(()=>{
         console.log(inc);
         console.log(s);
         
         if(s>inc)
         {
           //s=s+1;
          window.alert('No More Patients')
         }
         else{
          s=s+1;
         da.text('Next')
         rets(s);
         }
         //$(`<div id="aaya">Token Number:${s}</div>`)
         
       })
 
       $.get('/patientss').then((response) => {
         console.log(response)
         if (!response.success) {
           window.alert(response.msg)
         } else {
          
          console.log(response.data)
     
         }
       }).fail((err) => {
         console.log(err)
       })
       //un.append()
       console.log(inc);
       
     }
 
      
     
       
 
 
       
 
 
 )
 
 //console.log(counting);
         
 
 
 
 
 
 