var maxx=max;
var minn=min;


$(document).ready(()=>{
  setTimeout(function(){ console.log(maxx); }, 3000);
  
  console.log(minn);
  var count=0;
  var total=0;
  let list=$('#meds')
  let start=$('#med_start')
  let next=$('#next')
  $('body').append($(`<div id="border"></div>`).append($(`
  <table border="1" cellspacing="0" cellpadding="10" id="med_lis">
  <tbody>
  <tr>
      
  <th colspan="1">MEDICINE</th>
  <th colspan="1">Quantity</th>
  <th colspan="1">Amount</th>
  <th colspan="2"><button id="total">TOTAL</button></th>
  </tr>


  </tbody>
  
</table>`)))
$('#total').addClass("btn btn-primary")


    $.get('/medicine').then((response) => {
        console.log(response)
        if (!response.success) {
          window.alert(response.msg)
        }

      

          start.click(()=>{
          
            
            $('#med_lis').append($(`<tbody><tr>
          
            <th><span>${response.data[count].medicine}</span></th>
            <th><span>${(response.data[count].Day)*(response.data[count].Dose)}</span></th>
            <th><span><input id="theek" type="text" placeholder="Amount"></span></th>
            <th colspan="2"><button class="done">DONE</button></th>
            
            
            </tr></tbody>`))
            start.text('Add');
           
            $('.done').addClass("btn btn-success")
            $('.done').click((ev)=>{
              
              ev.target.parentElement.parentElement.remove();
              var $this=$(ev.target.parentElement.parentElement);
              console.log($this);
             
              
             // console.log($med.value)
              
              console.log($this.find('input').val());
              
              $('#med_lis').append($(`<tr>
           
              <th colspan="1"><span>${response.data[count].medicine}</span></th>
              <th colspan="1"><span>${(response.data[count].Day)*(response.data[count].Dose)}</span></th>
              <th colspan="1"><span>${$this.find('input').val()}</span></th>
              <th colspan="2"><span>WE CARE FOR U 🤗</span></th>
              
              
              
              
              
              </tr>`))

              total=total+parseInt($this.find('input').val());
              count=count+1; 
         
                  })
                }
         
          
          //response.data.forEach((element) => {
           


 

          
             )
             
             $('#total').click(()=>{
              console.log(total)
              $('#border').append($(`<div id="sum"><span id="span_total">TOTAL=${total}</span></div>`).addClass("border border-dark"))
            })
            next.click(()=>
            {
              $.get('/medicined').then((response) => {
                console.log(response)
                if (!response.success) {
                  window.alert(response.msg)
                }
              
            })
            location.reload(); })})
        }) 

