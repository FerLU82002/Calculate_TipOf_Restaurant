import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import  useOrder  from "./hooks/useOrder";

import "./index.css";


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder} = useOrder();

  return (
    <>
      <header className="bg-teal-500 py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white uppercase tracking-wide">
            Calculadora de Propinas y Consumo
          </h1>
          <p className="text-center text-teal-100 mt-2 text-lg">
            Calcule fácilmente sus gastos y propinas
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-8">
  {/* Menú */}
  <div className="p-6 bg-white shadow-md rounded-xl border border-slate-200">
    <h2 className="text-4xl font-extrabold text-slate-800">Menú</h2>

    <div className="space-y-4 mt-8">
      {menuItems.map((item) => (
        <MenuItem 
          key={item.id} 
          item={item} 
          addItem={addItem}
        />
      ))}
    </div>
  </div>

  {/* Contenido del pedido */}
  <div className="p-6 bg-white shadow-md rounded-xl border border-dashed border-slate-300">
    {order.length > 0 ? (
      <>
         <OrderContents
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm
            setTip={setTip}
            tip={tip}
          />

          <OrderTotals
          order={order}
          tip ={tip}
          placeOrder={placeOrder}
          />
      </>
    ):(
      <p className="text-center">La orden esta vacia</p>
    )}
   
  </div>
</main>

    </>
  );
}

export default App;
