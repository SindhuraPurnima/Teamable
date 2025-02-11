function isInvalidEmail(userObj)
{
   if (!userObj || !userObj.email) return true;
   return !userObj.email.includes("@") //Does the userObj nt contains @
}

function isPayloadEmpty(userObj)
{
    return Object.keys(userObj).length===0
}

module.exports=
{
    isInvalidEmail,//another syntax to export exports.isInvalidEmail=(userObj)=>{return !userObj.email.includes("@")}
    isPayloadEmpty

}

