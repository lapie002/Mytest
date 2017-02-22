function addition(a,b){
    var a = a;
    var b = b;

    return a+b;
}

function soustraction(a,b){
  var a = a;
  var b = b;

  return a-b;
}

function multiplier(a,b){
  var a = a;
  var b = b;

  return a*b;
}

function division(a,b){
  var a = a;
  var b = b;

  if(b===0){
    return "impossible!!!";
  }
  else{
    return a/b;
  }
}

function myFunction(item,a,b){
    var myDivroot = document.getElementById("root");
    var para = document.createElement("p");
    //var m = a;
    //var n = b;

    var res = item(a,b);
    //var text = res.toString();
    var textRes = document.createTextNode(res);
    para.appendChild(textRes);
    myDivroot.appendChild(para);
}

myFunction(addition,3,2);
myFunction(soustraction,3,2);
myFunction(multiplier,3,2);
myFunction(division,3,2);
