exports.min = function min (array){
    if (array == undefined || array.length == 0){
        return 0
    }
    return Math.min.apply(null, array);
}

exports.max = function max (array){
    if (array == undefined || array.length == 0){
        return 0
    }
    return Math.max.apply(null, array);
}

exports.avg = function avg (array){
    if(array == undefined){
        return 0 
    }
    var b = array.reduce((a, b) => a+b, 0 )/array.length || 0 
    return b 
}
