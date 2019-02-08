//setTimeout(function(){ console.log(counting); }, 3000);
var check=0;
var max=0;
var min=0;
var kcount=0;


//console.log(check);
$(document).ready(()=>{
  console.log(check);

  //let ma=counting;
  //console.log(counting)
  let bigg_div=$('#rew')
  let divb=$('#wer')
  let a="yup"
  let b="disease"
  let c="2003808208"
  let count=0;
  let g=0;
  var dcount=0;

  console.log('loaded')
    let ince=0;
    console.log(ince);
    /*function refresh()
    {
         $('#docs').remove()
         bigg_div.append($(`<div id="docs">Token Number:${ince}</div>`))
    }*/
   
    function refreshes(name,title,fees,test,phone,date)
    {
      
      $('#display').remove()
      divb.append($(`<div id="display">
      <img id="hospital_logo" src="Screenshot (73).png">
      
      <div id="name">Name:${name}</div>
      <div id="photo">Captured Photo</div><br>
      <div id="title">title:${title}</div>
      <div id="fees">fees:${fees}</div>
     <div id="test" ><input id="k" type="text" placeholder="Enter Test Name Here.."><button id="done_test">Done</button></div>
    <div id="phone">Phone Number:${phone}</div>
   <div id="date"> Date:${date}</div>
   <div id="token">Token Number:${ince}</div>
</div>`).addClass("border border-secondary"))
$('#k').css("border-radius","10px").css("margin-bottom","0px")
$('#done_test').addClass("btn btn-dark")

$('#done_test').click((ev)=>{
  var $this=$(ev.target.parentElement);
 var d=$this.find('input')
  var val=d.val();
  d.remove();
  $('#done_test').remove();

  $('#test').append($(`<div id="val_test">Test:${val}</div>`))



})


    }
    function makespace()
    {
      $('#display').append($(`<div id="makespc"><div id="pres">Prescription Sheet</div><br><div id="med">
      <table border="1" cellspacing="0" cellpadding="15" id="med_list">
      <tbody>
      
          <tr>
          
          <th colspan="1">MEDICINE</th>
          <th colspan="2">DAYS</th>
          <th>DOSE PER<br>DAY</th>
          <th><button id="add_med">ADD MEDICINE</button></th> 
          </tr>
          
         

      </tbody>
      
  </table></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div>`).addClass("border border-primary"))
    }

    
      $('#docs').hide();
      $('#start').click(()=>{
        if(kcount>0)
        {
           max=check+max;  
           min=check;
        }
        kcount=kcount+1;
        
        //count=count+1;
        console.log("in")

       
          ince=ince+1;
          //bigg_div.append($(`<div id="docs">Token Number:${ince}</div>`))
         // refresh()
        $('#docs').show();
        $('#start').text("NEXT")
        $.get('/list').then((response) => {
          console.log(response)
          if (!response.success) {
            window.alert(response.msg)
          }
          else{
            //response.data.forEach((element) => {
              console.log(response.data)
              console.log(response.data[count].date)
                 refreshes(response.data[count].name,response.data[count].title,response.data[count].fees,response.data[count].test,response.data[count].phone,response.data[count].date)
                 makespace();
                 count=count+1;
         // }
         $('#add_med').click(()=>{
           console.log("ho rha hai")
           $('#med_list').append($(`<tr>
          
           <th colspan="1"><input type="text"></th>
           <th colspan="2"><input type="text"></th>
           <th><input type="text"></th>
           <th><button class="done">DONE</button></th>
           
           
           </tr>`))
          
           
           $('.done').click((ev)=>{
             check=check+1;
             
             ev.target.parentElement.parentElement.remove();
             var $this=$(ev.target.parentElement.parentElement);
            
             var $med=$this.find('input')[0];
            // console.log($med.value)
             var day=$this.find('input')[1];
             var dose=$this.find('input')[2];
             $('#med_list').append($(`<tr>
          
             <th colspan="1"><span>${$med.value}</span></th>
             <th colspan="2"><span>${day.value}</span></th>
             <th><span>${dose.value}</span></th>
             <th><span>GET WELL SOON</span></th>
             
             
             </tr>`))
             var data=
          {
            medicine:$med.value,
            Day:day.value,
            Dose:dose.value
    
    
          }
          $.post("/medicine",data,
          function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
          });


            
           
 
          })
         })
        
        

      }
    

  
    }
)})
  
})
setTimeout(function(){ console.log(max); }, 3000);

      
   