const SearchForm = document.querySelector('.search-form');
const SearchBox = document.querySelector('.search-box');
const sResult = document.querySelector('.result');
const showBtn = document.querySelector('.show-btn');
let api = 'MCkqiFYamytMAZEWbqc38m8bZgg6cGxmYwC6oj4BQAU'

let keyword = '';
let page =1;
async function searchImage(){
    keyword = SearchBox.value
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json()
    
    if(page === 1){
        sResult.innerHTML = ''
    }
    const results = data.results;

    results.map((result)=>{
        const image = document.createElement('img')
        image.src = result.urls.small;
        const imgLink = document.createElement('a')
        imgLink.href = result.links.html
        imgLink.target = '_blank'
        imgLink.appendChild(image);
        sResult.appendChild(imgLink);
    })
    showBtn.style.display = "block";
} 
SearchForm.addEventListener('submit',  (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})
showBtn.addEventListener('click',()=>{
    page++;
    searchImage()
})