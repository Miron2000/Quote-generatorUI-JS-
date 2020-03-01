window.onload = function() {
    const result = document.getElementById('result');
    const author = document.getElementById('author');
    const button = document.getElementById('search');

    function getData(api, search) {
        return fetch(`${api}${search}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "150000-quotes.p.rapidapi.com",
                    "x-rapidapi-key": "1583454ff9msh6751b37db353586p1808bajsn91d8d9fbd8e7"
                }
            })
            .then(res => {
                if (!res.ok) {
                    console.log(res);
                    result.innerHTML = "Sorry, we don't have any quote for this word!"
                }
                return res.json()
            })
            .then(res => {
                console.log(res);

                result.innerHTML = res.message;
                author.innerHTML = res.author;
            })
            // .catch(err => console.log(err));//catch відловити помилку
    }

    button.addEventListener('click', function() {
        const search = document.getElementById('input'); //input.value
        const api = "https://150000-quotes.p.rapidapi.com/keyword/";
        getData(api, search.value); //вызвали функцию fetch
    });
}