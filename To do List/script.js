const List= document.querySelector('.js-ul');
const SearchBox= document.querySelector('.js-input');

SearchBox.addEventListener('keydown',()=>{
    EnterKey(event)
})

document.querySelector('.s-btn')
    .addEventListener('click',()=>{
        AddToList();
    }
)

function AddToList(){
    if (SearchBox.value === ''){
        alert('You must write something')
    }else{
        let li = document.createElement("li");
        li.innerHTML = SearchBox.value;
        List.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        Save();
    }
    SearchBox.value = '';
}
List.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        Save();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        Save();
    }
},false)

function Save(){
    localStorage.setItem('data', List.innerHTML)
}

function DisplaySaveData(){
    List.innerHTML = localStorage.getItem('data')
}

function EnterKey(event) {
    if (event.key === 'Enter') {
        AddToList()
    }
}
DisplaySaveData();