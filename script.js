let data =[
    ['images/1.PNG','Product 1','2.5'],
    ['images/2.PNG','Product 2','3.00'],
    ['images/3.PNG','Product 2','5.00'],
    ['images/4.PNG','Kari','4.00'],
    ['images/5.PNG','Salad','2.00'],
    ['images/6.PNG','Piza','6.00'],
]

function show(){
    inven.style.display="none";
    item.style.display="flex";
    list.innerHTML="Back";
    list.onclick=function(){
        hide();
    }
}

function hide(){
    inven.style.display="flex";
    item.style.display="none";
    list.innerHTML="Show";
    list.onclick=function(){
        show();
    }
}

let list=document.createElement("button");
document.body.appendChild(list);
list.innerHTML="Show";
list.onclick=function(){
    show();
}

let item=document.createElement("div");
document.body.appendChild(item);
item.style.display="flex";
item.style.flexWrap="wrap";
item.style.justifyContent="center";

let arr = new Array();
let index = 0;

function add_item(a){
    arr[index]=a;
    index++;
    item.innerHTML+=`<img src=${data[a][0]} style="width: 100px;">
    <span></span>`
    item.style.display="none";
}


let inven=document.createElement("div");
document.body.appendChild(inven);
inven.style.display="flex";
inven.style.flexWrap="wrap";
inven.style.justifyContent="center";
for(let i=0; i<data.length; i++){
    inven.innerHTML+=`
    <div style="margin: 10px; padding: 6px;">
        <img src="${data[i][0]}" style="width: 200px;"><br>
        <p1 style="color: red">${data[i][1]}</p1><br>
        <p2>${data[i][2]}$</p1><br>
        <button onclick="(function() { add_item('${i}') })()">Add
    </div>`;
}


