export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & { // hereda menuItem y agrega quantity
    quantity: number
}