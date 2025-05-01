import { formatCurrency } from "../helpers"
import { MenuItems, OrderItem } from "../types"


type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id: MenuItems['id']) => void
}

export default function OrderContents({order,removeItem}: OrderContentProps) {
  return (
    <div className="m-0.5">
        <h2 className='font-black text-4xl '>CONSUMO</h2>
        <div className="space-y-3 mt-10">        
                    {order.map(item => (
                       <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                            <div>
                                    <p className="text-lg">
                                        {item.name} - {formatCurrency(item.price) }
                                    </p>
                                    <p className="font-black">
                                        Cantidad:{item.quantity} - {formatCurrency(item.quantity * item.price)}
                                    </p>
                            </div>
                            <button className="bg-red-500 text-white rounded-full size-7 items-center"
                            onClick={() =>removeItem(item.id)}>x</button>
                       </div> 
                    ))}     
        </div>
    </div>
  )
}
