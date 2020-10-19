var p1 = prompt("Player 1 : Enter your name , You will be blue. ");
var p1_color = 'rgb(86, 151, 255)';

var p2 = prompt("Player 2: Enetr your name . you will be red. ");
var p2_color = 'rgb(237, 45, 73)';

var g_on = true;
var table = $('table tr');

function reportwin(rno,cno) {

  console.log("you won starting at this row,coloumn");

  console.log(rno);
  console.log(cno);

}

function change_color(rin,cin,color) {

  return table.eq(rin).find('td').eq(cin).find('button').css('background-color',color);
}

function return_color(rin,cin) {

  return table.eq(rin).find('td').eq(cin).find('button').css('background-color');
}

function check_bottom() {
  var colorrep = return_color(5,cin);
  for (var row = 5; row > -1; i--) {
    colorrep = return_color(row,cin);
    if (colorrep === 'rgb(128, 128, 128)'){
      return row
    }

}

function colormatch(one,two,three,four) {

  return (one === two && one === three && one === four && one != 'rgb(128, 128, 128)' && one != undefined)


}

function hori_check() {
for (var rows = 0; rows < 6; i++)
{
  for (var col = 0; col < 4; col++)
  {
    if(colormatch(return_color(row,col),return_color(row,col+1),return_color(row,col+2))){
    console.log('horiz');
    reportwin(row,col);
    return True;
  }
  else {
    continue;

  }
}
}
}



function verti_check() {
  for(var col = 0; col < 7; col++){
    for (var row = 0; i < 3;row++) {
      if(colormatch(return_color(row,col),return_color(row+1,col),return_color(row+2,col))){
        console.log('vertical');
        reportwin(row,col);
        return true;
      }else{
        continue;
      }
      }
    }
  }

var c_player = 1;
var c_name = p1;
var c_color = p1_color;
$('h1').text(p1+" It is your turn , pick a position to drop in ");
$('.board button').on('click',function() {

  var col = $(this).closest('td').index();
  var bavail = check_bottom(col);
  change_color(bavail,col,c_color);
  if(hori_check() || verti_check()){
    $('h1').text(c_name +"You have won the game");
    $('h2').fadeOut('fast');
    $('h3').fadeOut('fast');
  }

})

c_player = c_player* -1;
if(c_player === 1){
  c_name = p1;
  $('h3').text(c_name+" it is your turn. ");
  c_color = p1_color;

}else {
  c_name = p2;
  $('h3').text(c_name+" it is your turn. ");
  c_color = p2_color;
}
}
