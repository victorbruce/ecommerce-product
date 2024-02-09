import { ProductDetails, ProductImage } from "./components/Product";

export default function App() {
  return (
    <div className="lg:py-24 flex flex-col lg:flex-row gap-8 lg:items-center">
      <ProductImage />
      <ProductDetails />
    </div>
  );
}
