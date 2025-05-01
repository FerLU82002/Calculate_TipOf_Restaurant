import { useState, useEffect } from 'react'
import { OrderItem, MenuItems} from '../types'

export default function useOrder() {

    const initialOrder = ():OrderItem[] => {
            const localStoregeOrder = localStorage.getItem('order')
            return localStoregeOrder ? JSON.parse(localStoregeOrder) : []
    }

    const initialTip = ():number => {
        const localStoregeTip = localStorage.getItem('tip')
        return localStoregeTip ? JSON.parse(localStoregeTip) : 0
    }

    const [order,setOrder] = useState<OrderItem[]>(initialOrder())
    const [tip, setTip] = useState(initialTip())

    useEffect(( )=> {
        localStorage.setItem('order', JSON.stringify(order))
    },[order])

    useEffect(() => {
        localStorage.setItem('tip', JSON.stringify(tip))
    },[tip])
   
    const addItem = (item:MenuItems) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?   
                {...orderItem,quantity : orderItem.quantity + 1} : orderItem )
            setOrder(updateOrder)
        }else{
            
            const newItem:OrderItem = {...item, quantity: 1} 
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItems['id']) =>{
         const updateOrder = order.filter(item => item.id !== id)
         setOrder(updateOrder)
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }


    
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}

