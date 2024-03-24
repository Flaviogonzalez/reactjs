import { useMemo } from "react";
import { OrderItem } from "../types";
import formatCurrency from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

export default function OrderTotals({order, tip}: OrderTotalsProps ) {

    const subtotalAmount = useMemo(() => order.reduce((total, i) => total + (i.quantity * i.price), 0), [order])
    const tipAmout = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmout, [tip, order])
  return (
    <>
        <div className="">
            <h2 className="text-3xl">Totales</h2>

            <div className="border-b h-10 flex items-center flex-row justify-between">
                <p>Subtotal a pagar</p>

                <span>{formatCurrency(subtotalAmount)}</span>
            </div>

            <div className="border-b h-10 flex items-center flex-row justify-between">
                <p>Propina</p>

                <span>{formatCurrency(tipAmout)}</span>
            </div>

            <div className="h-10 flex flex-row items-center justify-between">
                <p>Total a pagar</p>

                <span>{formatCurrency(totalAmount)}</span>
            </div>
        </div>

        <button className="bg-stone-700 transition-all hover:bg-stone-800 active:bg-stone-900 disabled:opacity-10 w-48 h-10 rounded-3xl" disabled={totalAmount === 0}>
            Guardar Propina
        </button>
    </>
  )
}
