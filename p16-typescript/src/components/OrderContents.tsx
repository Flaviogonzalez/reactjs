import formatCurrency from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: React.Dispatch<OrderActions>
}


export default function OrderContents({order, dispatch} : OrderContentsProps) {
  return (
    <div>
        <h2 className="font-normal text-4xl">Consumo</h2>


        <div className=" mt-10 flex flex-row flex-wrap gap-3">
            {order.length === 0 ? (
                <p>la orden está vacía</p>
                ) : (
                order.map( item => (
                    <div className="w-fit  bg-stone-800 rounded-xl flex flex-row" key={item.id}>
                        <div className="px-3 py-2 transition-all hover:cursor-pointer hover:bg-stone-900 rounded-l-xl active:bg-stone-950 ">
                            <p>{item.name}</p>
                            <p className="text-sm text-stone-500">{formatCurrency(item.quantity * item.price)}</p>
                        </div>
                        
                        <button onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})} className="flex justify-center w-5 transition-all hover:cursor-pointer hover:bg-red-600 rounded-r-xl">

                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
