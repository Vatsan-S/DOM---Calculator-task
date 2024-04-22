function create(tag, className, id, text ){
  let ele = document.createElement(tag);
  ele.classList = className;
  ele.id = id;
  ele.innerHTML = text;
  return ele
}


let title = create("h1", "", "title", "Calculator Task")
document.body.append(title);

let description = create("p", "", "description", "Designed using DOM and it is functional")
document.body.append(description);

let calcContainer = create("div", "calcContainer","","");

let calcGrid1 = create("div", "calcGrid1", "", "");

let calcDisplay = create("div", "calcDisplay", "res","");

let displayPara = create("p", "", "displayPara", "0");
calcDisplay.append(displayPara);

calcGrid1.append(calcDisplay);

calcContainer.append(calcGrid1);

let calcButton1 = create("button", "calcButton", "clear", "c");
calcContainer.append(calcButton1);



let calcButton2 = create("button", "calcButton", "arr", "<-");
calcContainer.append(calcButton2);

let calcButton3 = create("button", "calcButton", "dot", ".");
calcContainer.append(calcButton3);

let calcButton4 = create("button", "calcButton", "multiply", "*");
calcContainer.append(calcButton4);

let calcButton5 = create("button", "calcButton", "7", "7");
calcContainer.append(calcButton5);

let calcButton6 = create("button", "calcButton", "8", "8");
calcContainer.append(calcButton6);

let calcButton7 = create("button", "calcButton", "9", "9");
calcContainer.append(calcButton7);

let calcButton8 = create("button", "calcButton", "divide", "/");
calcContainer.append(calcButton8);

let calcButton9 = create("button", "calcButton", "4", "4");
calcContainer.append(calcButton9);

let calcButton10 = create("button", "calcButton", "5", "5");
calcContainer.append(calcButton10);

let calcButton11 = create("button", "calcButton", "6", "6");
calcContainer.append(calcButton11);

let calcButton12 = create("button", "calcButton", "subtract", "-");
calcContainer.append(calcButton12);

let calcButton13 = create("button", "calcButton", "1", "1");
calcContainer.append(calcButton13);

let calcButton14 = create("button", "calcButton", "2", "2");
calcContainer.append(calcButton14);


let calcButton15 = create("button", "calcButton", "3", "3");
calcContainer.append(calcButton15);

let calcButton16 = create("button", "calcButton", "add", "+");
calcContainer.append(calcButton16);

let calcButton17 = create("button", "calcButton", "0", "0");
calcContainer.append(calcButton17);

let calcButton18 = create("button", "calcButton", "00", "00");
calcContainer.append(calcButton18);

let calcButton19 = create("button", "grid2 calcButton", "equal", "=");
calcContainer.append(calcButton19);

document.body.append(calcContainer);

document.getElementById("res").readOnly = true;
let input = create("input", "", "result", "");
document.body.append(input);


let displayValue = [];


document.body.addEventListener("keydown", (event)=>{
    let key = event.key;
    
    if(key == "c"){
        displayValue.length = 0;
        
        if(displayValue.length === 0){
        
        document.getElementById("displayPara").innerText = 0;}
    }

    else if((key == "1") || (key == "2") || (key == "3") ||
            (key == "4") || (key == "5") || (key == "6") ||
            (key == "7") || (key == "8") || (key == "9") ||
            (key == "0") || (key == "00") || (key == "+") ||
            (key == "-") || (key == "*") || (key == "/") ||
            (key == "%")){
                displayValue.push(key);
                
                document.getElementById("displayPara").innerHTML += key;
            }
    else if((key == "Enter") || (key == "=")){
    	let x = displayValue.join("");
        
        document.getElementById("displayPara").innerText = eval(x) ;
    }
    

     else{
        alert("Only numbers are allowed");
        
    }
})
 




