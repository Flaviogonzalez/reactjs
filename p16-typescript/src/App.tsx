import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {
  
  
  const [state, dispatch] = useReducer(orderReducer, initialState)
  return (
    <>
      <header className='bg-stone-800 flex justify-start items-center py-4 px-10 h-96 shadow-xl m-5 rounded-3xl'>
        <h1 className="text-center  text-4xl font-normal">Cálculo de propinas.</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-normal">Menu</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem key={item.id} item={item} dispatch={dispatch}/>
              
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-8">
          <OrderContents order={state.order} dispatch={dispatch}/>
          <TipPercentageForm dispatch={dispatch}/>
          <OrderTotals tip={state.tip} order={state.order}/>
        </div>

      </main>
    </>
  )
}

export default App
