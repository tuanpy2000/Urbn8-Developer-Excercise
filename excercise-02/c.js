function api(callback){
    callback(1)
}

function api2(callback){
    callback(2)
}

function api3(callback){
    callback(3)
}

api(async (result)=>{
    try{
        await console.log('result: ', result);
        api2(async (result2)=>{
            try{
                await console.log('result2: ', result2);
                api3(async (result3)=>{
                    try{
                        await console.log('result3: ', result3);
                    }
                    catch(error){
                        console.log(error);
                    }
                })
            }
            catch(error){
                console.log(error)
            }
        })
    }
    catch(error){
        console.log(error)
    }
})