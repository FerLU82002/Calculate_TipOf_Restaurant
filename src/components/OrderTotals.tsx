import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { useCallback } from "react"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}


export default function OrderTotals({order,tip,placeOrder}: OrderTotalsProps) {

    const subtotalAmount = useCallback(() => order.reduce((total,item) => total + (item.quantity * item.price),0 ),[order])
    const tipAmount = useCallback(() => subtotalAmount()*tip,[tip, order])
    const totalAmount = useCallback(() =>subtotalAmount()+tipAmount(),[tip,order] )

  return (
   <>
     <div className="space-y-3 m-0.5">
         <h2 className="">Totales y Propina</h2>
         <p>Subtotales a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount())}</span>
         </p>
         <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
         </p>
         <p>total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
         </p>
     </div>
     <button className="w-full bg-black p-3 uppercase text-white hover:bg-gray-500 rounded-2xl disabled:opacity-10"
             disabled={totalAmount() === 0}
             onClick={placeOrder}>
            Guardar Orden
     </button>
   
   </>
  )
}
