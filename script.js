

const btn = document.getElementById("add")
const inp = document.getElementById("inp")
const div = document.getElementById("np")

const allGoals = []

function Day(npatak) {
    this.npatak = npatak;
    this.checked = false;
}

function showAll() {
    allGoals.length > 0 && allGoals.forEach((e, i) => {
        div.innerHTML += `
            <div class=${e.checked ? "checked" : null}>${e.npatak}</div>
            <button onclick=checkGoal(${i})>check</button>
        `
    })
}


btn.onclick = () => {
    if (inp.value == "") alert("lracnel")
    else {
        const npatak = new Day(inp.value)
        allGoals.push(npatak)
        div.innerHTML = ""
        showAll()
    }
}

function checkGoal(i) {
    allGoals[i].checked = true
    div.innerHTML = ""
    showAll()
}


