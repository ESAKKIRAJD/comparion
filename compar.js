function myOperator () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a  == b);
}
function myFunction () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a === b);
}
function myOperator () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a  != b);
}
function myFunction () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a !== b);
}

function myOperator () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a  > b);
}
function myFunction () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a < b);
}


function myOperator () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a  >= b);
}
function myFunction () {
	var a = document.getElementById('inp1').value;
    var b = document.getElementById('inp2').value;
    document.getElementById('com').innerHTML =(a <= b);
}



//onclick

function myFunction () {
    document.getElementById('button').innerHTML= "Hai eveybady"
}

//double click

function myClick () {
    document.getElementById('dk').innerHTML= "Hai good morning to all"
}

//Onkeyup

function myData () {
        var b= document.getElementById('message').value;
        document.getElementById('mass').innerHTML=b;
        
     }


//Keydown

     function myAlert () {
    alert('Good morning')

}


//onkeypress

function myKey () {
    alert('Good morning')

}



//Onfocus



function myFocus () {
    var a = document.getElementById('details')
    a.style.background="green"

}

// Onblur

function myBlur () {
  document.getElementById('domain').style.background = "green";  

}


//swich 


function myFriends () {
     
     var life;
     var heart=document.getElementById('friends').value;

     switch (heart) {

     case "1":
                life = "M.Selvekumar";
                break;
     case "2":
                life = "S.karthick";
                break;
    case "3":
                life = "P.Esakkimuthu";
                break;           
    case "4":
                life = "E.Esakki";
                break;
    case "5":
                life = "Lakhman";
                break;
    case "6":
                life = "Raja";
                break;
    case "7":
                life = "Sham";
                break;
    case "8":
                life = "A.K.S.Janakiram";
                break;
    case "9":
                life = "M.Arun";
                break;
    case "10":
                life = "Masanam";
                break;
    case "11":
                life = "S.Ulaganathan";
                break;  
    default :
               life = "I need more friends";
                break;             

     }
       document.getElementById('mdt').innerHTML= life;

}

// For loop



function myOutput () {
    // body...
var a = document.getElementById('given number').value;
var numbers = ["1", "2", "3", "33", "1", "2", "33", "44", "33", "12", "21", "1", "3", "12", "12", "1", "3",];
var text = 0;

for(i=0; i<numbers.length; i++)
{
  if(Number(numbers[i])==a){
    text++;
      }
}
document.getElementById('get number').innerHTML=text;
document.getElementById('given num').innerHTML=a;

}


