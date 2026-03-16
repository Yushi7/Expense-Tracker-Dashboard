const balance = document.getElementById("balance")
const income = document.getElementById("income")
const expense = document.getElementById("expense")
const list = document.getElementById("list")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")
const type = document.getElementById("type")
const category = document.getElementById("category")
const warning = document.getElementById("warning")

const themeBtn = document.getElementById("themeBtn")

let transactions = JSON.parse(localStorage.getItem("transactions")) || []

let initialBalance = localStorage.getItem("initialBalance") || 0

function saveData(){
localStorage.setItem("transactions",JSON.stringify(transactions))
localStorage.setItem("initialBalance",initialBalance)
}

function setInitialBalance(){

initialBalance = +document.getElementById("initialBalanceInput").value

saveData()

render()

}

form.addEventListener("submit",function(e){

e.preventDefault()

let value = +amount.value

if(type.value==="expense"){
value = -value
}

const transaction = {

id:Date.now(),
text:text.value,
amount:value,
category:category.value,
date:new Date().toLocaleDateString()

}

transactions.push(transaction)

saveData()

render()

form.reset()

})

function deleteTransaction(id){

transactions = transactions.filter(t=>t.id!==id)

saveData()

render()

}

function render(){

list.innerHTML=""

transactions.forEach(t=>{

const li = document.createElement("li")

li.innerHTML = `
${t.text} (${t.category}) - ${t.date}
<span class="${t.amount>0?'income':'expense'}">
₹${t.amount}
</span>

<button onclick="deleteTransaction(${t.id})">Delete</button>
`

list.appendChild(li)

})

updateSummary()

updateChart()

}

function updateSummary(){

const amounts = transactions.map(t=>t.amount)

const incomeTotal = amounts
.filter(a=>a>0)
.reduce((a,b)=>a+b,0)

const expenseTotal = amounts
.filter(a=>a<0)
.reduce((a,b)=>a+b,0)

const totalBalance = Number(initialBalance) + incomeTotal + expenseTotal

balance.innerText="₹"+totalBalance
income.innerText="₹"+incomeTotal
expense.innerText="₹"+Math.abs(expenseTotal)

if(totalBalance<0){

warning.innerText="⚠ You exceeded your monthly budget!"

}else{

warning.innerText=""

}

}

let chart

function updateChart(){

const categoryTotals={}

transactions.forEach(t=>{

if(t.amount<0){

categoryTotals[t.category] =
(categoryTotals[t.category] || 0) + Math.abs(t.amount)

}

})

const data = {

labels:Object.keys(categoryTotals),

datasets:[{

data:Object.values(categoryTotals)

}]

}

if(chart) chart.destroy()

chart = new Chart(

document.getElementById("chart"),

{

type:"pie",

data:data

}

)

}

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark")

})

render()