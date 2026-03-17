import React, { useContext } from "react";
import { ProductContext } from "../store/Context";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="p-6">
      {cart.length > 0 ? (
        <>
          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    Price: ${item.price}
                  </p>

                  <p className="text-gray-700 font-medium">
                    Qty: {item.qty}
                  </p>

                  <p className="text-green-600 font-semibold">
                    Subtotal: ${item.price * item.qty}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="mt-10 text-right">
            <h2 className="text-2xl font-bold">
              Total: ${totalPrice}
            </h2>
          </div>
        </>
      ) : (
        <h1 className="text-center text-5xl mt-20 text-gray-500">
          Your Cart is Empty 🛒
        </h1>
      )}
    </div>
  );
};

export default Cart;