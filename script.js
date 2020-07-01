
var displayDiv=document.createElement('div');
displayDiv.setAttribute('class','container-fluid');
document.body.append(displayDiv);
fetch('https://restcountries.eu/rest/v2/all').then(response=>{return response.json();}).then(d=>{
    let rows=Math.ceil(d.length/3);
    let n=0;
    
    for(let j=0;j<rows;j++){
    var row=document.createElement('div');
    row.setAttribute('class','row');
    displayDiv.appendChild(row);
    
    for(let i=0;i<3;i++)
    {
     var card=document.createElement('div');//For individual countries
     card.setAttribute('class','card col mx-4 my-4');
     var title=document.createElement('h5');//Country Name
     title.setAttribute('class','card-header');
     title.innerHTML=(n+1)+"."+d[n].name;
     card.appendChild(title);
     var img=document.createElement('img');//Country Flag
     img.src=d[n].flag;
     img.setAttribute('class','card-img-top h-50')
     card.appendChild(img);
    row.appendChild(card);
    // Country capital
    var capital=document.createElement('h6');
    capital.setAttribute('class','card-subtitle mb-2 text-muted')
    capital.innerHTML="<br>Capital:"+d[n].capital;
    card.appendChild(capital);
    //Currency
    var curr=document.createElement('p');
    card.appendChild(curr);
    let str=[];
    for(let c=0;c<d[n].currencies.length;c++)
       str.push(d[n].currencies[c].code);
    curr.innerHTML="<li><b>Currencies: </b>"+str.join(',')+"</li>";
    //Languages
    var lang=document.createElement('p');
    card.appendChild(lang);
    let str1=[];
    for(let c=0;c<d[n].languages.length;c++)
       str1.push(d[n].languages[c].name);
    lang.innerHTML="<li><b>Languages: </b>"+str1.join(',')+"</li>";
    //Continent
    var continent=document.createElement('h5');
    card.appendChild(continent);
    continent.innerHTML="<b>Continent:</b>"+"<i> "+d[n].region+"</li>";
    n++;
    //Button for Weather.
    //Add Footer for button
    var foot=document.createElement('div');
    
    card.appendChild(foot);
    var button=document.createElement('button');
    button.setAttribute('class','btn btn-light');
    foot.setAttribute('style','text-align:center');
    button.innerHTML="View Current Weather";
    foot.appendChild(button);
    button.onclick=display(d[n]);
    

    }
}

}).catch(err=>console.log(err));
function display(d){
   console.log(d.name);
}
/*
var a=document.getElementsByClassName('btn');
console.log(a);
document.body.addEventListener('click',event=>{
   console.log();
   if(event.target.classList.contains('btn'))
   {
     var a=event.target.parentNode.parentNode.children;
     console.log(a.item(0).innerHTML[0]);
   }
})
*/
