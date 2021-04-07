(document.querySelector('.container').parentNode).classList.add(localStorage.getItem('pageColor') || 'red')
var element = document.querySelectorAll('.color-switcher li')
var parent = document.querySelector('.container').parentNode
var classesList = [];
// loop on element
for (var i = 0; i< element.length;i++){
// Get classes List
classesList.push(element[i].getAttribute('data-color'))
//event click

element[i].addEventListener('click',function(){
    var parent = document.querySelector('.container').parentNode

    parent.classList.remove(...classesList)
    parent.classList.add(this.getAttribute('data-color'));
    //local storeg

    localStorage.setItem('pageColor',this.getAttribute('data-color'))
    },false
 );
}
console.log(localStorage.getItem('pageColor'))




