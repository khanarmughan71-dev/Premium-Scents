function Cart() {
  return (
    <section className="min-h-screen bg-black text-white py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide mb-16">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-8">

          {/* Item */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-900/60 rounded-2xl p-6 gap-6">
            <div className="flex items-center gap-6">
              <img
                src="/perfume01.jpg"
                alt="Noir Essence"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-medium tracking-wide">Noir Essence</h3>
                <p className="text-sm text-white/60">$120</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-white/70">Qty: 1</span>
              <button className="text-sm text-red-400 hover:text-red-300 transition">
                Remove
              </button>
            </div>
          </div>

          {/* Item */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-neutral-900/60 rounded-2xl p-6 gap-6">
            <div className="flex items-center gap-6">
              <img
                src="/perfume02.jpg"
                alt="Velvet Oud"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <h3 className="font-medium tracking-wide">Velvet Oud</h3>
                <p className="text-sm text-white/60">$140</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-white/70">Qty: 1</span>
              <button className="text-sm text-red-400 hover:text-red-300 transition">
                Remove
              </button>
            </div>
          </div>

        </div>

        {/* Summary */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          <p className="text-lg text-white/80">
            Total: <span className="font-semibold">$260</span>
          </p>

          <button className="px-10 py-3 rounded-full bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </section>
  );
}

export default Cart;
