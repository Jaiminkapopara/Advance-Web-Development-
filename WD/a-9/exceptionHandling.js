var divide function(x, y, next) {
    if (y === 0) {
        next(new Error("can not divide by zero"))
    }
    else {
        next(null, x / y)
    }
}

divide(9, 3, function (err, result) {
    if (err) {
        console.log("9/3=err", err)
    } else {
        console.log("9/3=" + result)
    }
})

divide(9, 0, function (err, result) {
    if (err) {
        console.log("9/0=err", err)
    } else {
        console.log("9/0=" + result)
    }
}) 
