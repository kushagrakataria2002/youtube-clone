const searchIcon = document.querySelector('.searchLogo'); 
const inputField = document.querySelector('#default-input'); 
const refrenceContainer = document.querySelector('.template'); 

const apiCallOnSearch = () =>{
    const apiObject = new XMLHttpRequest(); 
    apiObject.open('GET', `https://youtube-v31.p.rapidapi.com/search?q=${inputField.value}%20&part=snippet%2Cid&regionCode=in&maxResults=50&order=relevance`);
    
    apiObject.setRequestHeader('X-RapidAPI-Key', '00df45cbdfmshf650d2235a6eceap1e9556jsn67885b5ff73c');
    apiObject.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');

    apiObject.onload = () =>{
        const data = JSON.parse(apiObject.response);  
        let count = 0; 
        while(count <= 49){
            let valueToBeInserted = `
            <div class="cards hover:cursor-pointer lg:w-2/6 md:w-1/2 sm:w-1/2 p-4 w-full">
                <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src='${data.items[count].snippet.thumbnails.high.url}'>
                </a>
                <div class="mt-4">
                    <h2 class="text-gray-900 title-font text-lg font-medium">${data.items[count].snippet.title}</h2>
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${data.items[count].snippet.channelTitle}</h3>
                </div>
            </div>
            `; 
            refrenceContainer.insertAdjacentHTML('afterbegin', valueToBeInserted); 
            count = count + 1; 
        }
    }; 
    refrenceContainer.innerHTML = ``; 
    apiObject.send(); 
}; 

searchIcon.addEventListener('click', () =>{
    apiCallOnSearch(); 
}); 

