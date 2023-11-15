const refrenceContainerLoader = document.querySelector('.template'); 

const apiCallOnLoad = () =>{
    const apiObjectLoad = new XMLHttpRequest(); 
    apiObjectLoad.open('GET', `https://youtube-v31.p.rapidapi.com/search?q=Dhruv%20Rathee&part=snippet%2Cid&regionCode=in&maxResults=50&order=relevance`);
    
    apiObjectLoad.setRequestHeader('X-RapidAPI-Key','00df45cbdfmshf650d2235a6eceap1e9556jsn67885b5ff73c');
    apiObjectLoad.setRequestHeader('X-RapidAPI-Host', 'youtube-v31.p.rapidapi.com');

    apiObjectLoad.onload = () =>{
        const loadData = JSON.parse(apiObjectLoad.response); 
        let countLoad = 0; 
        while(countLoad <= 49){
            let valueToBeInsertedLoad = `
            <div class="hover:cursor-pointer lg:w-2/6 md:w-1/2 sm:w-1/2 h-3/5 p-4 w-full">
                <a href = "player.html"class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src='${loadData.items[countLoad].snippet.thumbnails.high.url}'>
                </a>
                <div class="mt-4">
                    <h2 class="text-gray-900 title-font text-lg font-medium">${loadData.items[countLoad].snippet.title}</h2>
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${loadData.items[countLoad].snippet.channelTitle}</h3>
                </div>
            </div>
            `; 
            refrenceContainerLoader.insertAdjacentHTML('afterbegin', valueToBeInsertedLoad); 
            countLoad = countLoad + 1; 
        }
    }; 
    apiObjectLoad.send(); 
};

window.addEventListener('load', () =>{
    apiCallOnLoad(); 
}); 