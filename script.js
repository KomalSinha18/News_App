const queryString=window.location.search;
const urlParams=new URLSearchParams(queryString);
const category=urlParams.get(`category`)|| "General"


async function fetchNews (category){

    document.getElementById("container").innerHTML = `<img src="loading.png" class="loader" alt="...">`

    const resp = await fetch(`https://newsapi.org/v2/top-headlines?country=IN&apiKey=f2dfef5a1bbb498b88ac71bece39f20f&category=${category}`, {
        origin: "cros" });
    const respData = await resp.json();
    console.log(respData?.articles)
    document.getElementById("container").innerHTML = ""
    for(let i =0 ; i<respData?.articles?.length; i++){
        document.getElementById("container").innerHTML+=`<div class="card text-bg-dark shadow rounded" style="width: 100%;">
        <img src=${respData?.articles[i]?.urlToImage || "blank_img.jpg"} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${respData?.articles[i]?.title}</h5>
          <p class="card-text">${respData?.articles[i]?.description}</p>
          <a href=${respData?.articles[i]?.url} target="_blank" class="btn btn-primary">Read More</a>
        </div>
      </div>`
    }
    

}
fetchNews(category)