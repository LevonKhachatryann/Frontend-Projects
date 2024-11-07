function addNum(arg) {
    if (res.value[0] !== "0") {
        res.value += arg
    }
    else {
        res.value = arg
    }
}

function clearInp() {
    res.value = ""
}

const syms = ["+", "-", "/", "*"]



function addSymbol(symbol) {
    let int = false;
    syms.map((e) => {
        if (e === res.value[res.value.length - 1]) {
            let x = res.value.split("")
            x[x.length - 1] = symbol
            x = x.join("")
            res.value = x
            int = true;
        }
    })
    if (!int) {
        res.value += symbol
    }
}

function getResult(){
    res.value = eval(res.value)
}