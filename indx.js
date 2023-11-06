var SiteNameInput =document.getElementById("SiteName");
var SiteURLInput =document.getElementById("SiteURL");
var NaneError=document.getElementById("NaneError");
var urlError=document.getElementById("urlError");
var buttonid=document.getElementById("update")
var idssearch=document.getElementById("search")
var productcontenier=[]
var mainindex = 0;
var products={
    Name: SiteNameInput.value,
    URLI: SiteURLInput.value,
}


function addproducts() {
    if(buttonid.innerHTML==("update") ){
        buttonid.innerHTML-("submit")
        var products={
            Name: SiteNameInput.value,
            URLI: SiteURLInput.value,
        }
        productcontenier.splice(mainindex,1,products)
    }else{
        var products={
            Name: SiteNameInput.value,
            URLI: SiteURLInput.value,
        }
        displyeproduct(productcontenier);

    
    }



productcontenier.push(products);
errorproductname()
errorproducturl()

localStorage.setItem('products',JSON.stringify(productcontenier));

clearfrom()


}

function displyeproduct(v){
    var   cartouna =''
    
for(var i = 0; i  <productcontenier.length ; i++)
{
    cartouna +=`
    

    <p>${productcontenier[i].Name}</p>
    <p>${productcontenier[i].URLI}</p> 
    <button   class="btn btn-outline-info w-25 mt-2 form-control p-2"> <a href="${productcontenier[i].URLI}" onclick="productsvisit(${i});" class=" text-decoration-none">visitor</a></button>
     <button onclick="updatebook(${i});" class="btn btn-outline-warning w-25 mt-2 form-control  p-2"> update </button>

    <button onclick="deleteproduct(${i});" class="btn btn-outline-danger w-25 mt-2 form-control  p-2">delete</button>


    `
}
document.getElementById('divshos').innerHTML = cartouna;

}

function clearfrom()
    {
    SiteNameInput.value ="";
    SiteURLInput.value =""; 


}

function  deleteproduct(x)
{
    productcontenier.splice(x,1)
    displyeproduct(productcontenier)
}

var nameregex=/^[A-Za-z]$/
function errorproductname(){
    if ( nameregex.test(SiteNameInput.value))
    {
        return true;
    }    

    else( nameregex.test(SiteNameInput.value)==false &&nameregex.test(SiteNameInput.value)== ""   )
     {
        
        NaneError.classList.replace('d-block','d-none');

    
    }   
  }
  var urlregex=/^(https:)?(www)?[A-Za-z0-9_/.]{1,}.[a-z]{3}$/
  function errorproducturl(){
    if ( nameregex.test(SiteURLInput.value)==true   )
    {
        return true;
        
        
    }    

    else( nameregex.test(SiteURLInput.value)==false &&nameregex.test(SiteNameInput.value)== ""   )
     {
        
        urlError.classList.replace('d-block','d-none');

        return false;
    
    }   
   
  }


//   function productsvisit(){
//     var regex=/^[a-z][A-Z].$/
//     if(regex.test(SiteURLInput.value)==true){

//     console.log('hello');
//     }
//     else((regex.test(SiteURLInput.value)==false))
//     {
//         console.log('ERROR');
//     }

//   }
  function  updatebook(indx){
SiteNameInput.value =productcontenier[indx].Name
    SiteURLInput.value =productcontenier[indx].URLI
    buttonid.innerHTML="update"
    mainindex=indx


  }


function search(tern){
    var wontedbook=[]
    for( var i=0 ; i<productcontenier.length  ; i++){
    if(productcontenier[i].Name.TolowerCase().includes(tern.TolowerCase) == true){
        wontedbook.push(productcontenier[i])
        displyeproduct(wontedbook)
    }
    displyeproduct(wontedbook)

    }

    displyeproduct(wontedbook)
}
