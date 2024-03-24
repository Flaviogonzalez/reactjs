import { MenuItem, OrderItem } from "../types";

export type OrderActions =  // defino las acciones
    {type: 'add-item', payload: {item: MenuItem}} | 
    {type: 'remove-item', payload: {id: MenuItem['id']}} |
    {type: 'add-tip', payload: {value: number}}

// order por la logica de la aplicacion: "cliente pidiendo una orden."
export type OrderState = { // defino el tipo de dato para el state
    order: OrderItem[],
    tip: number
}

export const initialState : OrderState = { // inicializo el state
    order: [],
    tip: 0 
}

export const orderReducer = ( // estos son los props del reducer, que defino en la app o donde inserte el useReducer
    state: OrderState = initialState, // a state le declaro el tipo de dato (orderstate) e initialState inicializa en valores predeterminados
    action: OrderActions // orderActions ordena los tipos de datos de las acciones; tiene 3 "acciones" que se definen aca abajo, el tipo de dato lo puedo agregar antes o despues de que haya terminado la logica de la accion. (en este caso antes pq ya tengo la logica xd)
    ) => {

        if (action.type === 'add-item') {
            const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
            let order : OrderItem[] = []
            if (itemExist) {
                order = state.order.map(orderItem => orderItem.id === action.payload.item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem )
              
            } else {
              const newItem : OrderItem = {...action.payload.item, quantity: 1}
        
              order = [...state.order, newItem]
            }
            return {
                ...state,
                order
            }
        }
        if (action.type === 'remove-item') {

            const order = state.order.filter( item => item.id !== action.payload.id)

            return {
                ...state,
                order
            }
        }
        if (action.type === 'add-tip') {

            const tip = action.payload.value

            return {
                ...state,
                tip
            }
        }

        return state
}