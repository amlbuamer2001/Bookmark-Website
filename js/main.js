var sName=document.getElementById('sName');
var sURL=document.getElementById('sURL')
 allSites=[]
 if(localStorage.getItem('site')!=null){
    allSites=JSON.parse(localStorage.getItem('site'))
    displaySites()
 }

 /////////////////////////////////
function submit(){
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
    var nameRegex=/^[a-z][A-Z]{1,9}$/gm;
    var testing=regex.test(sName.value)
    if(testing==true){
        sURL.style.color="green";   
        sURL.style.borderColor="green";   
        sURL.style.borderWidth="2px";
        return true;   
    }
    else{
        return false;
    }
}
 /////////////////////////////////
 function validUrl(){
    // var urlRegex=/[(http(s)?):\/\/(www\.)?a-zA-z0-9]/gm;
    var urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var testing=urlRegex.test(sURL.value)
    if(testing==true){
        sURL.style.color="green";   
        sURL.style.borderColor="green";   
        sURL.style.borderWidth="2px";
        return true;   
    }
    else{
        return false;
    }
}