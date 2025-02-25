import React, { useContext, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { authContext } from "../../context/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function OrderSummary() {
  const { user } = useContext(authContext);
  const { data, refetch } = useCart(user?.uid);
  const axiosPublic = useAxiosPublic();
  const handleAdd = async (planId, price) => {
    const info = {
      userId: data?.userId,
      planId: planId,
      quantity: 1,
      price: price,
    };
    try {
      console.log(info);
      const res = await axiosPublic.post("/add-to-cart", info);
      console.log(res.data);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteItem = async (itemId, price, quantity) => {
    const cartInfo = {
      cartId: data?._id,
      itemId: itemId,
      price: price * quantity,
      quantity: quantity,
    };
    console.log(cartInfo);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteRes = await axiosPublic.post("/remove-from-cart", cartInfo);
        console.log(deleteRes.data);
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "The item has been removed from your cart.",
        //   icon: "success",
        // });
        refetch();
      }
    });
  };

  return (
    <div className="m-4 lg:mx-20 py-6 lg:my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-20">
        {/* Cart Items Section */}
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
          <hr className="border-gray-400 md:mb-6" />
          {data?.items && data.items.length > 0 ? (
            data.items.map((item) => (
              <div
                key={item._id || item.product.toString()}
                className="flex flex-col md:flex-row  justify-between border-b border-gray-300 py-4"
              >
                <div className="flex  items-center gap-4">
                  <img
                    className="w-32 h-32 object-contain"
                    src={item?.product?.img}
                    alt={item?.product?.name}
                  />
                  <div>
                    <p className="text-lg font-medium">{item?.product?.name}</p>
                    <p className="text-gray-600">
                      $ {Number(item?.product?.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                  <div className="flex items-center border border-gray-500 rounded">
                    <button
                      onClick={() =>
                        handleAdd(
                          item?.product._id,
                          item?.product?.price,
                          item?.quantity
                        )
                      }
                      className="px-2 py-1 text-gray-700"
                    >
                      <FaPlus />
                    </button>
                    <span className="px-3 text-base font-semibold text-baseColor">
                      {item?.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleDeleteItem(
                          item?.product._id,
                          item?.product.price,
                          1
                        )
                      }
                      className="px-2 py-1 text-gray-700"
                    >
                      <FaMinus />
                    </button>
                  </div>
                  <p className="text-lg font-semibold">
                    $ {(item?.quantity * item?.product?.price).toFixed(2)}
                  </p>
                  <button
                    onClick={() =>
                      handleDeleteItem(
                        item?.product._id,
                        item?.product.price,
                        item?.quantity
                      )
                    }
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrashCan size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <hr className="border-gray-400 mb-6" />
          <div className="flex justify-between mb-4 text-lg mb">
            <p className="">SubTotal</p>
            <p className="">
              {" "}
              ${" "}
              {data?.total !== undefined
                ? Number(data.total).toFixed(2)
                : "0.00"}
            </p>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-300"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Check Out
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box ">
              <h3 className="font-semibold text-2xl text-center">
                We can't accept online orders right now
              </h3>
              <p className="py-4 text-center ">
                Please contact us to complete your purchase.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-black text-white">Got It</button>
                </form>
              </div>
            </div>
          </dialog>
          {/* <button className="mt-4 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition duration-300">
            Check Out
          </button> */}
        </div>
      </div>
    </div>
  );
}
