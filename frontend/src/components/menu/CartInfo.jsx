import React, { useEffect, useRef, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../../redux/slices/cartSlice";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const scrolLRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [newQuantity, setNewQuantity] = useState("");

  useEffect(() => {
    if (scrolLRef.current) {
      scrolLRef.current.scrollTo({
        top: scrolLRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const openUpdateModal = (item) => {
    setSelectedItem(item);
    setNewQuantity(item.quantity.toString());
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setNewQuantity("");
  };

  const handleQuantityChange = (e) => {
    setNewQuantity(e.target.value);
  };

  const handleUpdateConfirm = () => {
    const quantityNum = Number(newQuantity);
    if (!newQuantity || isNaN(quantityNum) || quantityNum <= 0) {
      alert("Please enter a valid positive number");
      return;
    }
    dispatch(updateQuantity({ id: selectedItem.id, quantity: quantityNum }));
    closeUpdateModal();
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div
        className="mt-4 overflow-y-scroll scrollbar-hide h-[380px]"
        ref={scrolLRef}
      >
        {cartData.length === 0 ? (
          <p className="text-[#ababab] text-sm flex items-center justify-center h-[380px] ">
            Cart is Empty add items
          </p>
        ) : (
          cartData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
                  {item.name}
                </h1>
                <p className="text-[#ababab] font-semibold">x{item.quantity}</p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <RiDeleteBin2Fill
                    onClick={() => handleRemove(item.id)}
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                  />
                  <FaNotesMedical
                    className="text-[#ababab] cursor-pointer"
                    size={20}
                    onClick={() => openUpdateModal(item)}
                  />
                </div>
                <p className="text-[#f5f5f5] text-md font-bold">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 "  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="bg-[#262626] p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-[#f5f5f5] text-xl font-semibold mb-4">
              Update Quantity
            </h2>
            <input
              type="number"
              min="1"
              value={newQuantity}
              onChange={handleQuantityChange}
              className="w-full p-2 rounded bg-[#1f1f1f] text-white focus:outline-none"
            />
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={closeUpdateModal}
                className="px-4 py-2 rounded bg-gray-600 text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateConfirm}
                className="px-4 py-2 rounded bg-yellow-400 text-gray-900 font-bold"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartInfo;