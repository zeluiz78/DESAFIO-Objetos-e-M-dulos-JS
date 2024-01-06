import Order from "../models/order.js";
import { shipment } from "./shipping-service.js";

export function total (order) {
    return order.basic - order.basic * (order.discount / 100) + shipment(order)
}