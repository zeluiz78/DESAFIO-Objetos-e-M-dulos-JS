import Order from "./models/order.js"
import { total } from "./services/order-service.js"


const order = document.getElementById("order").innerHTML.split("\n")

const order1 = new Order(order[0], Number(order[1]), Number(order[2]))

const totalValue = total(order1)

console.log(`Pedido código ${order1.code}`)
console.log(`Valor total : R$ ${total(order1).toFixed(2)}`)