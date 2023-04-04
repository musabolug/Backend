
function circleArea (r){
    let pi = 3.14

    let result = pi*(r*r)
    console.log(`yari capi ${r} olan dairenin alani = ${result}`)
}
function circleCircumference(r){
    let pi = 3.14
    let result = pi*2*r
    console.log(`yari capi ${r} olan dairenin cevresi = ${result}`)
}

// export{circleArea,circleCircumference}

module.exports={
    circleArea,circleCircumference
};