import formatCurrency from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"


type MenuItemProps = { // tipo de dato para los props
    item: MenuItem,
    // addItem: (item: MenuItem) => void // al prop de la funcion se le asigna el tipo de dato tmb, void = retorna nada
    dispatch: React.Dispatch<OrderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button onClick={() => dispatch({type: 'add-item', payload: {item}})} className="border-2 border-stone-300 w-full px-5 py-3 flex justify-between rounded-3xl hover:bg-stone-800 active:bg-stone-600 hover:text-white transition-all">
        <p>{item.name}</p>
        <p className="font-normal text-stone-400">{formatCurrency(item.price)}</p>
    </button>
  )
}
