

// Задача текущего кода: динамически добавлять блоки текстовых фильтров

// Вызывается только данный метод, остальные используются только из него
function addListener(css,event) {
    var text = document.querySelector(css);

    if(event){
        if(text.value.length > 0 && event.keyCode === 13){
            add(text);
        }else{ }
    }else if (text.value.length > 0){
        add(text);
    } 
}


function addFilter(element,textElement) {

  var newText = document.createElement('h5');
  newText.textContent = textElement.value;
  newText.className = 'filterTExt';
    element.title = 'убрать';
  element.appendChild(newText);

}

function addStyle(element) {
    element.className = 'filterTExt';
}

function addClickEvent(element) {
    element.addEventListener('click',function (event) {
                element.parentNode.removeChild(element);
    },false);
}



function add(text) {
    // No dublicate start
var s = false;
var countdublicate = 0;
 var elements = document.getElementsByTagName('h5');

    for(var i =0;i < elements.length;i++){
      if(elements[i].textContent == text.value)
          countdublicate = 1;
    }
        // No dublicate End

    if(countdublicate == 0){
        var newFilter = document.createElement('DIV');
        addFilter(newFilter,text);
        newFilter.style.display = 'inline-block'; // addStyle(newFilter);
        addClickEvent(newFilter);
        text.parentNode.appendChild(newFilter);
    }
}