let info = process.argv.slice(2)

function Area (r){
    let pi = 3.14

    let result = pi*(r*r)
    console.log(`yari capi ${r} olan dairenin alani = ${result} dur`)
    console.log(info)
}

Area(info[0])