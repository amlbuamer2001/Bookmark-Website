var sName=document.getElementById('sName');
var sURL=document.getElementById('sURL')
var alertDiv=document.querySelector(".overlay")
var closeBtn=document.querySelector('.fa-xmark')
closeBtn.addEventListener('click',hideLayer)
function hideLayer(){
    alertDiv.classList.add("d-none")
}

alertDiv.addEventListener('click',function(e){
    if(e.target==alertDiv){
        hideLayer()
    }
})

 allSites=[]
 if(localStorage.getItem('site')!=null){
    allSites=JSON.parse(localStorage.getItem('site'))
    displaySites()
 }

 /////////////////////////////////
function submit(){
    if(validName()==true&&validUrl()==true){
         var site={
        name:sName.value,
        url:sURL.value
    };
    allSites.push(site);
    localStorage.setItem('site',JSON.stringify(allSites))
    console.log(allSites);
    clearData();
    displaySites();
    }
    else{
        alertDiv.classList.remove("d-none") 
    }
}
 /////////////////////////////////
function clearData(){
    sName.value='';
    sURL.value='';
}
 /////////////////////////////////
function displaySites(){
    var cartona='';
    for(var i=0 ;i<allSites.length;i++){
        cartona+=`
        <tr> 
        <td>${i+1}</td>
        <td>${allSites[i].name}</td>
        <td><button class="btn btn-warning"><a href="${allSites[i].url}" target="_blank" class="text-decoration-none"><i class="fa-solid fa-eye me-1"></i>visit</a></button></td>
    
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash me-1"></i>Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tBody').innerHTML=cartona;
}
 /////////////////////////////////
// function visit(index){
//     window.open(allSites[index].url,'_blank') 
// }
//<td><button onclick="visit(${i})" class="btn btn-warning"><i class="fa-solid fa-eye me-1"></i>visit</button></td>
 /////////////////////////////////
 function deleteSite(index){
    allSites.splice(index,1)
    displaySites()
    localStorage.setItem('site',JSON.stringify(allSites))
}
function deleteAll(){
    allSites.splice(0,allSites.length)
    localStorage.setItem('site',JSON.stringify(allSites))   
    displaySites()

}
 /////////////////////////////////
function validName(){
    var nameRegex=/[A-Z][a-z]{1,9}$/i;
    var testing=nameRegex.test(sName.value)
    if(testing==true){
        sName.classList.add("is-valid")  
        sName.classList.remove("is-invalid")  
    return true;
    }
    else{
        sName.classList.add("is-invalid")   
        sName.classList.remove("is-valid")  
    return false

    }
}
 /////////////////////////////////
 function validUrl(){
    // var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})+\/$/gi;
    var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    var testing=urlRegex.test(sURL.value)
    if(testing==true){
        sURL.classList.add("is-valid")  
        sURL.classList.remove("is-invalid") 
    return true;
    }
    else{
        sURL.classList.add("is-invalid")   
        sURL.classList.remove("is-valid")  
    return false
    }
}
sName.addEventListener("keyup",validName)
sURL.addEventListener("keyup",validUrl)