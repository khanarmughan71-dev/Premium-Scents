import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <section className="bg-black text-white min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-12">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* LEFT — CUSTOMER DETAILS */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold tracking-wide">
              Billing Details
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              />

              <input
                type="text"
                placeholder="Shipping Address"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              />

              <textarea
                placeholder="Order Notes (optional)"
                rows="3"
                className="w-full bg-transparent border border-white/20 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              />
            </form>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="bg-neutral-900 rounded-3xl p-6 md:p-8 h-fit">
            <h2 className="text-xl font-semibold tracking-wide mb-6">
              Your Order
            </h2>

            {/* Items */}
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-white/60">
                  Your cart is empty.
                </p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-sm border-b border-white/10 pb-3"
                  >
                    <span>
                      {item.name}
                      {item.quantity && (
                        <span className="text-white/50">
                          {" "}× {item.quantity}
                        </span>
                      )}
                    </span>
                    <span>
                      Rs. {item.price * (item.quantity || 1)}
                    </span>
                  </div>
                ))
              )}
            </div>

            {/* Total */}
            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Total</span>
              <span>Rs. {total}</span>
            </div>

            {/* Place Order */}
            <button
              disabled={cartItems.length === 0}
              className="
                mt-8 w-full py-3 rounded-full
                bg-white text-black font-medium
                hover:bg-neutral-200 transition
                disabled:bg-white/20 disabled:text-white/40 disabled:cursor-not-allowed
              "
            >
              Place Order
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;
