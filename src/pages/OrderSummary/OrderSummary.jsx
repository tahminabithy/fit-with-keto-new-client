import React, { useContext } from "react";
import { useCart } from "../../hooks/useCart";
import { authContext } from "../../context/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function OrderSummary() {
  const { user } = useContext(authContext);
  const { data } = useCart(user?.uid);
  const axiosPublic = useAxiosPublic();
  const handleDeleteItem = async (itemId, price, quantity) => {
    const cartInfo = {
      cartId: data?._id,
      itemId: itemId,
      price: price,
      quantity: quantity,
    };
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
        const result = await axiosPublic.post("/remove-from-cart", cartInfo);
        console.log(result);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      refetch();
    });
  };
  return (
    <div className="m-2 lg:mx-20 lg:my-16 ">
      <div className="block md:flex gap-4">
        <div className="w-full md:w-3/5">
          <p className="text-xl">My Cart</p>
          <div className="border-b border-black my-4"></div>
          {data?.items?.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-start gap-6 border-b border-gray-400 p-4"
            >
              <img
                className="w-40 h-40 object-contain"
                src={item?.product.img}
                alt=""
              />
              <div className="mt-4 block md:flex gap-4 w-full justify-between">
                <div>
                  <p>{item?.product.name}</p>
                  <p className="">$ {item?.product?.price}</p>
                </div>
                <div className="flex justify items-center gap-x-4">
                  <div className="border border-gray-700 flex items-center justify-center gap-x-2 h-8 w-20 my-4 px-2">
                    <FaPlus />
                    <p className="text-baseColor font-bold">{item?.quantity}</p>
                    <FaMinus />
                  </div>
                  <p>${data.total}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  handleDeleteItem(
                    item.product._id,
                    item.product.price,
                    item.quantity
                  )
                }
                className="hover:text-red-800 mt-6"
              >
                <FaTrashCan />
              </button>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xl">Order Summary</p>
        </div>
      </div>
    </div>
  );
}
