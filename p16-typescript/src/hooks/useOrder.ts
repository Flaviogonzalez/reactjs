// import { useState } from "react"
// import { MenuItem, OrderItem } from "../types"

// export default function useOrder() {
//   const [order, setOrder] = useState<OrderItem[]>([]) // asignando tipo de dato a un state de array
//   const [tip, setTip] = useState(0)

//   const addItem = (item : MenuItem) => {
//     const itemExist = order.find(orderItem => orderItem.id === item.id)

//     if (itemExist) {
//       const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem )

//       setOrder(updatedOrder)
      
//     } else {
//       const newItem : OrderItem = {...item, quantity: 1}

//       setOrder([...order, newItem])
//       console.log(order)
//     }

//   }

//   const removeItem = (id: MenuItem['id']) => {
//     setOrder(order.filter( item => item.id !== id))
//   }

//   return {
//     order,
//     tip,
//     setTip,
//     addItem,
//     removeItem
//   }
// }


// pase todo al useReducer