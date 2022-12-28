import CartTotals from "./components/CartTotals";
import Catogories from "./components/Catogories";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    
    <>
      <Header/>
      <div className="home px-4 flex justify-between gap-10">
        <div className="catogories  overflow-auto max-h-[calc(100vh-_-112px)] pb-64">
          <Catogories />
        </div>
        <div className="products flex-[8]">
         <Products/>
        </div>
        <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] border ">
         <CartTotals/>
        </div>
      </div>
    </>
  );
}

export default App;
