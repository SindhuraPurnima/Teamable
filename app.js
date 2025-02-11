function handleEditProfile()
{
    var defaultName=document.getElementById("name").textContent
    var name=document.getElementById("input-name")
    name.value=defaultName

    var defaultEmail=document.getElementById("email").textContent
    var email=document.getElementById("input-email")
    email.value=defaultEmail

    var defaultInterests=document.getElementById("interests").textContent
    var interests=document.getElementById("input-interests")
    interests.value=defaultInterests

    document.getElementById("Edit-view").style.display="block"
    document.getElementById("Display-view").style.display="none"
}

function handleUpdateProfile()
{
    //name
    var updatedName=document.getElementById("input-name").value //when we type the name in the input box on the web page the code finds that input box by its Id "input-name" and gets the value inside it and passes that value to updatedName.The .value part means that we want to get whatever you typed in that box.
    var name= document.getElementById("name") //we want find the place to display the updated name. We want to display it in the spot which is having Id "name" and passing it to name.
    name.textContent=updatedName //In the name.textcontent area will show the updated name. 
    
    //email
    var updatedEmail=document.getElementById("input-email").value 
    var email= document.getElementById("email") 
    if(validator.isEmail('updatedEmail')){//=> true
        email.textContent=updatedEmail 
    }
    else{
        alert("Wrong email format")
    }
    
    var updatedInterests=document.getElementById("input-interests").value 
    var interests= document.getElementById("interests") 
    interests.textContent=updatedInterests 
    
    document.getElementById("Display-view").style.display="block"
    document.getElementById("Edit-view").style.display="none"
}