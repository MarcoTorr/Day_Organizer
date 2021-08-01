var currentDate = moment();
var tableBody = $('#tableBody');
var currentHour = $('#currentDay').text(currentDate.format('hh:mm a'));
var tableHour = $('*tr');
var input0= $('#input0').val();
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









$('#currentDay').text(currentDate.format('dddd, MMMM Do'));

for (i=0; i<23;i++){
    console.log(tableHour[i].id);

    if (currentHour< tableHour[i].id){
        tableHour[i].children('tr').css('background-color','blue');
    }
}

function init(){
    getEvent();
    input0.text(storedEvent1);
    input1.text(storedEvent2);
    input2.text(storedEvent3);
    input3.text(storedEvent4);
    input4.text(storedEvent5);
    input5.text(storedEvent6);
    input6.text(storedEvent7);
    input7.text(storedEvent8);
    input8.text(storedEvent9);
    input9.text(storedEvent10);
    input10.text(storedEvent11);
    input11.text(storedEvent12);
    input12.text(storedEvent13);
    input13.text(storedEvent14);
    input14.text(storedEvent15);
    input15.text(storedEvent16);
    input16.text(storedEvent17);
    input17.text(storedEvent18);
    input18.text(storedEvent19);
    input19.text(storedEvent20);
    input20.text(storedEvent21);
    input21.text(storedEvent22);
    input22.text(storedEvent23);
    input23.text(storedEvent24);

}

function getEvent() {
    var storedEvent1 = localStorage.getItem("00:00");

    if (storedEvent2===null){
        storedEvent2="";
    }else {
        var storedEvent2 = localStorage.getItem("01:00");
    }
    if (storedEvent3===null){
        storedEvent3="";
    }else {
        var storedEvent3 = localStorage.getItem("02:00");
    }
    if (storedEvent4===null){
        storedEvent4="";
    }else {
        var storedEvent4 = localStorage.getItem("03:00");
    }
    if (storedEvent5===null){
        storedEvent5="";
    }else {
        var storedEvent5 = localStorage.getItem("04:00");
    }
    if (storedEvent6===null){
        storedEvent6="";
    }else {
        var storedEvent6 = localStorage.getItem("05:00");
    }
    if (storedEvent7===null){
        storedEvent7="";
    }else {
        var storedEvent7 = localStorage.getItem("06:00");
    }
    if (storedEvent8===null){
        storedEvent8="";
    }else {
        var storedEvent8 = localStorage.getItem("07:00");
    }
    if (storedEvent9===null){
        storedEvent9="";
    }else {
        var storedEvent9 = localStorage.getItem("08:00");
    }
    if (storedEvent10===null){
        storedEvent10="";
    }else {
        var storedEvent10 = localStorage.getItem("09:00");
    }
    if (storedEvent11===null){
        storedEvent11="";
    }else {
        var storedEvent11 = localStorage.getItem("10:00");
    }
    if (storedEvent12===null){
        storedEvent12="";
    }else {
        var storedEvent12 = localStorage.getItem("11:00");
    }
    if (storedEvent13===null){
        storedEvent13="";
    }else {
        var storedEvent13 = localStorage.getItem("12:00");
    }
    if (storedEvent14===null){
        storedEvent14="";
    }else {
        var storedEvent14 = localStorage.getItem("13:00");
    }
    if (storedEvent15===null){
        storedEvent15="";
    }else {
        var storedEvent15 = localStorage.getItem("14:00");
    }
    if (storedEvent16===null){
        storedEvent16="";
    }else {
        var storedEvent16 = localStorage.getItem("15:00");
    }
    if (storedEvent17===null){
        storedEvent17="";
    }else {
        var storedEvent17 = localStorage.getItem("16:00");
    }
    if (storedEvent18===null){
        storedEvent18="";
    }else {
        var storedEvent18 = localStorage.getItem("17:00");
    }
    if (storedEvent19===null){
        storedEvent19="";
    }else {
        var storedEvent19 = localStorage.getItem("18:00");
    }
    if (storedEvent20===null){
        storedEvent20="";
    }else {
        var storedEvent20 = localStorage.getItem("19:00");
    }
    if (storedEvent21===null){
        storedEvent21="";
    }else {
        var storedEvent21 = localStorage.getItem("20:00");
    }
    if (storedEvent22===null){
        storedEvent22="";
    }else {
        var storedEvent22 = localStorage.getItem("21:00");
    }
    if (storedEvent23===null){
        storedEvent23="";
    }else {
        var storedEvent23 = localStorage.getItem("22:00");
    }
    if (storedEvent24===null){
        storedEvent24="";
    }else {
        var storedEvent24 = localStorage.getItem("23:00");
    }
    
}


button0.on('click',function(){
    localStorage.setItem("00:00",input0)
})
button1.on('click',function(){
    localStorage.setItem("01:00",input1)
})
button2.on('click',function(){
    localStorage.setItem("02:00",input2)
})
button3.on('click',function(){
    localStorage.setItem("03:00",input3)
})
button4.on('click',function(){
    localStorage.setItem("04:00",input4)
})
button5.on('click',function(){
    localStorage.setItem("05:00",input5)
})
button6.on('click',function(){
    localStorage.setItem("06:00",input6)
})
button7.on('click',function(){
    localStorage.setItem("07:00",input7)
})
button8.on('click',function(){
    localStorage.setItem("08:00",input8)
})
button9.on('click',function(){
    localStorage.setItem("09:00",input9)
})
button10.on('click',function(){
    localStorage.setItem("10:00",input10)
})
button11.on('click',function(){
    localStorage.setItem("11:00",input11)
})
button12.on('click',function(){
    localStorage.setItem("12:00",input12)
})
button13.on('click',function(){
    localStorage.setItem("13:00",input13)
})
button14.on('click',function(){
    localStorage.setItem("14:00",input14)
})
button15.on('click',function(){
    localStorage.setItem("15:00",input15)
})
button16.on('click',function(){
    localStorage.setItem("16:00",input16)
})
button17.on('click',function(){
    localStorage.setItem("17:00",input17)
})
button18.on('click',function(){
    localStorage.setItem("18:00",input18)
})
button19.on('click',function(){
    localStorage.setItem("19:00",input19)
})
button20.on('click',function(){
    localStorage.setItem("20:00",input20)
})
button21.on('click',function(){
    localStorage.setItem("21:00",input21)
})
button22.on('click',function(){
    localStorage.setItem("22:00",input22)
})
button23.on('click',function(){
    localStorage.setItem("23:00",input23)
})

init()

