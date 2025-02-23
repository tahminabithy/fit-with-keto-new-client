import React from "react";
import { FaTrashCan, FaX } from "react-icons/fa6";
import { useCart } from "../../hooks/useCart";
import { FaMinus, FaPlus } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import MyCart from "../MyCart/MyCart";

export default function Drawer({ uid, isOpen, toggole }) {
  const axiosPublic = useAxiosPublic();
  const { data, refetch } = useCart(uid);
  console.log(data);
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
      //   window.location.reload();
    });
  };
  return (
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-lg transform transition-transform duration-300 z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 ">
          <button
            onClick={toggole}
            className="mb-4 text-baseColor text-sm underline top-3 right-3 fixed  hover:bg-gray-200 transition duration-300 ease-in-out p-2 rounded-full "
          >
            <FaX />
          </button>
          <div className="py-8 ">
            <p className="text-xl font-light  text-baseColor">
              Cart{" "}
              <span className="ml-2 text-sm font-light text-black">
                ({data?.quantity} items)
              </span>{" "}
            </p>
            <div className="border-b border-black my-4"></div>
            <ul>
              {data?.items?.map((item, index) => (
                <li key={index}>
                  <div className="flex justify-between gap-x-4 my-4 ">
                    <img
                      className="w-20 h-20 object-contain"
                      src={item.product.img}
                      alt=""
                    />
                    <div className="flex justify-between items-start w-full">
                      <div>
                        <p className=""> {item.product.name}</p>
                        <p className="text-xs">$ {item.product.price}</p>
                        <div className="border border-gray-700 flex items-center justify-center gap-x-2 h-8 w-16 my-4 px-2">
                          <FaPlus />
                          {item?.quantity}
                          <FaMinus />
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
                        className="text-red-800"
                      >
                        <FaTrashCan />
                      </button>
                    </div>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
