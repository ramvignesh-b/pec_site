// JavaScript Document
function ham(div1, div2, div3) {
  document.getElementById(div1).style.display = "none";
  document.getElementById(div2).style.display = "block";
  document.getElementById(div3).style.display = "block";
}

function goback(div1, div2, div3) {
  var x1 = document.getElementById(div1).style.display;
  var x2 = document.getElementById(div2).style.display;
  var x3 = document.getElementById(div3).style.display;
  if (x3 == "block") {
    x3 = "none";
    x2 = "block";
    x1 = "none";
  }
  if (x2 == "block") {
    x2 = "none";
    x1 = "block";
  }
}

function show(evt, div, div2, div3, div4, div5) {
  document.getElementById(div).style.display = "block";
  document.getElementById(div2).style.display = "none";
  document.getElementById(div3).style.display = "none";
  document.getElementById(div4).style.display = "block";
  document.getElementById(div5).style.display = "block";
  evt.currentTarget.style.borderLeft = "4px solid teal";
}

function hide(div, div1, div2, div3, div4, div5) {
  if (div1 == "nbut") {
    document.getElementById("m_ham").style.display = "block";
  }
  document.getElementById(div).style.display = "none";
  document.getElementById(div1).style.display = "none";
  document.getElementById(div2).style.display = "none";
  document.getElementById(div3).style.display = "none";
  document.getElementById(div4).style.display = "none";
  document.getElementById(div5).style.display = "none";
}



function inactive(id1, id2, id3, id4) {
  document.getElementById(id1).style.borderLeft = "8px solid white";
}

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  document.getElementById("oncampus").style.display = "none";
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTab2(evt, tab, tab1) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].style.borderLeft = "0px";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab1).style.display = "inline-block";
  document.getElementById(tab).style.display = "inline-block";
  document.getElementsById("oc").currentTarget.className += " active";
  evt.currentTarget.style.borderLeft = "8px solid #008080";
  document.getElementById
  evt.currentTarget.className += " active";
}

function myFunction(x) {
  x.classList.toggle("change");
  if (document.getElementById("tab1").style.display != "block")
    document.getElementById("tab1").style.display = "block";
  else
    document.getElementById("tab1").style.display = "none";
}

function drop(evt, drop) {
  if (document.getElementById(drop).style.display != "block") {
    document.getElementById(drop).style.display = "block";
    /*evt.currentTarget.style.fontWeight = "bold";*/
    /*evt.currentTarget.style.borderLeft = "8px solid teal";*/
  } else {
    document.getElementById(drop).style.display = "none";
    evt.currentTarget.style.fontWeight = "normal";
    /*evt.currentTarget.style.borderLeft = "8px solid white";*/
  }
}
