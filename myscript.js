

function myFunction()
{
    document.getElementById("demo1").innerHTML ="Hellooo there";
    document.getElementById("demo2").innerHTML ="Hello Again";

}
function validateForm(){
    var x = document.forms["myForm"]["width"].value;
    if(x ===" ") {
        alert("No Value added");
        return false;
    }
};
function GetDiv_list(input_num, div)
{
const result = Math.trunc(input_num / div);
const div_list=[div*(result - 1), div*result, div*(result +1)];
 return div_list;
}

function checkNum()
{
let inputElement = document.getElementById("width");
const num= inputElement.value;
inputElement = document.getElementById("divisible");
const divisible = inputElement.value;
const listContainer = document.getElementById("list-container")



if (num % divisible === 0){

    document.getElementById("message1").innerHTML ="✅";
    document.getElementById("result").innerHTML ="<br><font color=green><b>✅&nbsp;&nbsp;" + num + "</b> is divisible by " + divisible;
    listContainer.innerText ="";
    if (num % 256 === 0){
        document.getElementById("result").innerHTML += "<br><font color=green><b>⭐&nbsp;&nbsp;" + num + " </b>is a power of 2";
    };
    
} else {
    document.getElementById("message1").innerHTML ="❌";

    document.getElementById("result").innerHTML ="<br><font color=red>❌&nbsp;&nbsp;<b>" + num + "</b> is not divisible by " + divisible;

    const div_list = GetDiv_list(num, divisible);
    const container = document.getElementById("list-container");
    container.innerText = "Suggestions:";
    div_list.forEach(item => {
        const li = document.createElement("li");
        li.style.margin ="5px";

        const textNode = document.createTextNode(item + " \u00A0 ");

        const copyBtn = document.createElement("button");
        copyBtn.innerText="Copy";

        copyBtn.onclick = () => {
            navigator.clipboard.writeText(item);
        };

        li.appendChild(textNode);
        li.appendChild(copyBtn);
        container.appendChild(li);
    });


}

}

function ClearForm() {
    document.getElementById("message1").textContent="";
    document.getElementById("result").innerHTML="";
    document.getElementById("list-container").innerText="";
    document.getElementById("myForm").reset();
    

 
}