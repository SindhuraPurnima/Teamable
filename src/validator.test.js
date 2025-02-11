const { isInvalidEmail, isPayloadEmpty } = require('./validator')
test('valid email',function()
{
   const testPayload ={
    name : "test name",
    email :"testemail@ex.com",
    interests : "testing"
   }
   const result = isInvalidEmail(testPayload)
   expect(result).toBe(false)
})

test('invalid email',function()
    {
        const testPayload ={
            name : "test name",
            email :"testemail",
            interests : "testing"
           }
           const result = isInvalidEmail(testPayload)
           expect(result).toBe(true)
    }
)

test('emptypayload',function(){
    const testPayload ={
        
       }
       const result = isPayloadEmpty(testPayload)
       expect(result).toBe(true)
})

test('datapayload',function(){
    const testPayload ={
        name : "test name",
            email :"testemail",
            interests : "testing"
       }
       const result = isPayloadEmpty(testPayload)
       expect(result).toBe(false)
})
