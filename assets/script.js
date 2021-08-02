var currentDate = moment();
var tableBody = $('#tableBody');
var currentHour = currentDate.format('hh');
var currentMinute= currentDate.format('mm');
var timeNumbers = ((Number(currentMinute))/60) + Number(currentHour);
var tableHour = $('*tr');
var input0= $('#input0');
var input1= $('#input1');
var input2= $('#input2');
var input3= $('#input3');
var input4= $('#input4');
var input5= $('#input5');
var input6= $('#input6');
var input7= $('#input7');
var input8= $('#input8');
var input9= $('#input9');
var input10= $('#input10');
var input11= $('#input11');
var input12= $('#input12');
var input13= $('#input13');
var input14= $('#input14');
var input15= $('#input15');
var input16= $('#input16');
var input17= $('#input17');
var input18= $('#input18');
var input19= $('#input19');
var input20= $('#input20');
var input21= $('#input21');
var input22= $('#input22');
var input23= $('#input23');
var button0= $('#button0');
var button1= $('#button1');
var button2= $('#button2');
var button3= $('#button3');
var button4= $('#button4');
var button5= $('#button5');
var button6= $('#button6');
var button7= $('#button7');
var button8= $('#button8');
var button9= $('#button9');
var button10= $('#button10');
var button11= $('#button11');
var button12= $('#button12');
var button13= $('#button13');
var button14= $('#button14');
var button15= $('#button15');
var button16= $('#button16');
var button17= $('#button17');
var button18= $('#button18');
var button19= $('#button19');
var button20= $('#button20');
var button21= $('#button21');
var button22= $('#button22');
var button23= $('#button23');
var storedEvent1;
var storedEvent2;
var storedEvent3;
var storedEvent4;
var storedEvent5;
var storedEvent6;
var storedEvent7;
var storedEvent8;
var storedEvent9;
var storedEvent10;
var storedEvent11;
var storedEvent12;
var storedEvent13;
var storedEvent14;
var storedEvent15;
var storedEvent16;
var storedEvent17;
var storedEvent18;
var storedEvent19;
var storedEvent20;
var storedEvent21;
var storedEvent22;
var storedEvent23;
var storedEvent24;

var inputStyle = $('*input');
inputStyle.each(function(){
    $(this).width('50%');
})






$('#currentDay').text(currentDate.format('dddd, MMMM Do'));
for (i=0; i<25;i++){
    console.log(Number(tableHour[i].id));
    console.log(Number(currentHour));
    var each= tableHour[i];
    if (Number(tableHour[i].id) < Number(currentHour)){
        each.style.backgroundColor="grey";
    } else if (Number(tableHour[i].id) === Number(currentHour)){
        each.style.backgroundColor = "yellow"
    } else if (Number(tableHour[i].id) > timeNumbers ){
        each.style.backgroundColor="green";
    } 
}



function init(){
   
    var storedEvent1 = localStorage.getItem("00:00");
    input0.val(storedEvent1);
    var storedEvent2 = localStorage.getItem("01:00");
    input1.val(storedEvent2);
    var storedEvent3 = localStorage.getItem("02:00");
    input2.val(storedEvent3);
    var storedEvent4 = localStorage.getItem("03:00");
    input3.val(storedEvent4);
    var storedEvent5 = localStorage.getItem("04:00");
    input4.val(storedEvent5);
    var storedEvent6 = localStorage.getItem("05:00");
    input5.val(storedEvent6);
    var storedEvent7 = localStorage.getItem("06:00");
    input6.val(storedEvent7);
    var storedEvent8 = localStorage.getItem("07:00");
    input7.val(storedEvent8);
    var storedEvent9 = localStorage.getItem("08:00");
    input8.val(storedEvent9);
    var storedEvent10 = localStorage.getItem("09:00");
    input9.val(storedEvent10);
    var storedEvent11 = localStorage.getItem("10:00");
    input10.val(storedEvent11);
    var storedEvent12 = localStorage.getItem("11:00");
    input11.val(storedEvent12);
    var storedEvent13 = localStorage.getItem("12:00");
    input12.val(storedEvent13);
    var storedEvent14 = localStorage.getItem("13:00");
    input13.val(storedEvent14);
    var storedEvent15 = localStorage.getItem("14:00");
    input14.val(storedEvent15);
    var storedEvent16 = localStorage.getItem("15:00");
    input15.val(storedEvent16);
    var storedEvent17 = localStorage.getItem("16:00");
    input16.val(storedEvent17);
    var storedEvent18 = localStorage.getItem("17:00");
    input17.val(storedEvent18);
    var storedEvent19 = localStorage.getItem("18:00");
    input18.val(storedEvent19);
    var storedEvent20 = localStorage.getItem("19:00");
    input19.val(storedEvent20);
    var storedEvent21 = localStorage.getItem("20:00");
    input20.val(storedEvent21);
    var storedEvent22 = localStorage.getItem("21:00");
    input21.val(storedEvent22);
    var storedEvent23 = localStorage.getItem("22:00");
    input22.val(storedEvent23);
    var storedEvent24 = localStorage.getItem("23:00");
    input23.val(storedEvent24);
 

}



button0.on('click',function(){
    localStorage.setItem("00:00",input0.val())
})
button1.on('click',function(){
    localStorage.setItem("01:00",input1.val())
})
button2.on('click',function(){
    localStorage.setItem("02:00",input2.val())
})
button3.on('click',function(){
    localStorage.setItem("03:00",input3.val())
})
button4.on('click',function(){
    localStorage.setItem("04:00",input4.val())
})
button5.on('click',function(){
    localStorage.setItem("05:00",input5.val())
})
button6.on('click',function(){
    localStorage.setItem("06:00",input6.val())
})
button7.on('click',function(){
    localStorage.setItem("07:00",input7.val())
})
button8.on('click',function(){
    localStorage.setItem("08:00",input8.val())
})
button9.on('click',function(){
    localStorage.setItem("09:00",input9.val())
})
button10.on('click',function(){
    localStorage.setItem("10:00",input10.val())
})
button11.on('click',function(){
    localStorage.setItem("11:00",input11.val())
})
button12.on('click',function(){
    localStorage.setItem("12:00",input12.val())
})
button13.on('click',function(){
    localStorage.setItem("13:00",input13.val())
})
button14.on('click',function(){
    localStorage.setItem("14:00",input14.val())
})
button15.on('click',function(){
    localStorage.setItem("15:00",input15.val())
})
button16.on('click',function(){
    localStorage.setItem("16:00",input16.val())
})
button17.on('click',function(){
    localStorage.setItem("17:00",input17.val())
})
button18.on('click',function(){
    localStorage.setItem("18:00",input18.val())
})
button19.on('click',function(){
    localStorage.setItem("19:00",input19.val())
})
button20.on('click',function(){
    localStorage.setItem("20:00",input20.val())
})
button21.on('click',function(){
    localStorage.setItem("21:00",input21.val())
})
button22.on('click',function(){
    localStorage.setItem("22:00",input22.val())
})
button23.on('click',function(){
    localStorage.setItem("23:00",input23.val())
})

init()
