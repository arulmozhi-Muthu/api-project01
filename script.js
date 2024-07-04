document.querySelector("button").addEventListener("click",result);

var container=document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result()
{
    row.innerHTML=" ";
    try{
    var test=document.getElementById("search").value 
    var data1=await fetch(`https://api.disneyapi.dev/character?name=${test}`)
    var res=await data1.json();
    console.log(res.data);
    var col=document.createElement("div");
    col.className="col-lg-4";
    col.innerHTML=`<div class="card" style="width: 18rem;">
  <img src="${res.data.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><b>ID:${res.data._id}</b></p><br>
    <p class="card-text"><b>Name:${res.data.name}</b></p><br>
    <p class="card-text"><b>Films:${res.data.films}</b></p><br>
     <p class="card-text"><b>TvShows:${res.data.tvShows}</b></p>
     <p class="card-text"><b>CreatedAt:${res.data.createdAt}</b></p>
     <p class="card-text"><b>UpdatedAt:${res.data.updatedAt}</b></p>
  </div>
</div>`
    row.append(col);
     container.append(row);
     document.body.append(container)
    
    }
    catch(error)
    {
        console.log(error);

    }
}