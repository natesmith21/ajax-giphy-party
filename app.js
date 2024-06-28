console.log("Let's get this party started!");
let $searchInput = $('#search')

const apiKey = '3MnFPoP5jWc5kcDbjp6ipFheT6ZzZYSZ';

async function searchGifs(term){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: apiKey, q: term}});
    const whichGif = Math.floor(Math.random() * 25);
    const gifUrl = res.data.data[whichGif].images.original.url;

    let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"});
    let $newGif = $("<img>", {
        src: gifUrl,
        class: "w-100"
    });
    $newCol.append($newGif);
    $('#gif-container').append($newCol);
}



$('#searchBtn').on('click', async (e) => {
    e.preventDefault();

    let searchTerm = $searchInput.val();
    $searchInput.val('');

    await searchGifs(searchTerm)
});

$('#clearBtn').on('click', (e) => {
    e.preventDefault(); 

    $('img').remove();
});

// async function randomGifs(term){
//     const res = await axios.get('https://api.giphy.com/v1/gifs/random', {params: {api_key: apiKey}});
//     console.log(res);
// }

