import { useState } from "react";

function Navbar() {
  return (
    <nav className="bg-[#0D1B2A] border-b border-[#1B263B]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#00B4D8]">GroceryStock</h1>
        <ul className="flex gap-6 text-[#E0E1DD]">
          <li className="hover:text-[#00B4D8] cursor-pointer">Dashboard</li>
          <li className="hover:text-[#9A4DFF] cursor-pointer">Products</li>
          <li className="hover:text-[#FFB703] cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-[#0D1B2A] py-16 text-center">
      <h2 className="text-4xl font-bold text-[#00B4D8] mb-4">
        Manage Your Grocery Inventory
      </h2>
      <p className="text-[#E0E1DD] text-lg max-w-2xl mx-auto">
        A modern, colorful, and efficient way to track your groceries.
        Search, filter, and manage products with ease.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-[#1B263B] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-[#E0E1DD] text-sm">
        © {new Date().getFullYear()} GroceryStock. All rights reserved.
      </div>
    </footer>
  );
}

function FilterableProductGrid({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Search + Filter Panel */}
      <div className="bg-[#1B263B] p-6 rounded-xl shadow-lg mb-10">
        <h3 className="text-xl font-semibold text-[#9A4DFF] mb-4">
          Search & Filter
        </h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={filterText}
            placeholder="Search products..."
            onChange={(e) => setFilterText(e.target.value)}
            className="flex-grow rounded-lg px-4 py-2 bg-[#0D1B2A] text-[#E0E1DD] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
          />
          <label className="flex items-center gap-2 text-sm text-[#E0E1DD]">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="accent-[#FFB703] w-4 h-4"
            />
            In Stock Only
          </label>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.name}
            className="bg-[#1B263B] rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-[#00B4D8]/30 transition"
          >
            <h4
              className={`text-lg font-bold ${
                product.stocked ? "text-[#E0E1DD]" : "text-red-400"
              }`}
            >
              {product.name}
            </h4>
            <p className="text-[#9A4DFF] mt-2">{product.category}</p>
            <p className="text-[#FFB703] font-semibold mt-4">
              {product.price}
            </p>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredProducts.length === 0 && (
        <p className="text-[#E0E1DD] text-center mt-10">
          No products match your search.
        </p>
      )}
    </div>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "$1.5", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: false, name: "Dragon fruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passion fruit" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: false, name: "Peas" },
];

export default function App() {
  return (
    <div className="bg-[#0D1B2A] min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-grow px-6 py-12">
        <FilterableProductGrid products={PRODUCTS} />
      </main>
      <Footer />
    </div>
  );
}
