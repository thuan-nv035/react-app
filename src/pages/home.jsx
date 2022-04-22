import React from "react";
import { Link } from "react-router-dom";
import useModal from "../components/useModal";
import Modal from "../components/Modal";
function Home(props) {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className="container mx-auto">
        <div className="py-6">
          <div className="flex justify-around">
            <Link to="/cart">
              <button className="text-red-700 text-2xl font-bold">Cart</button>
            </Link>
          </div>
        </div>
        <div className="py-6">
          <div className="flex justify-around">
            <button className="text-red-700 text-2xl rounded-full">
              Đồ ăn
            </button>
            <button className="text-red-700 text-2xl">Đồ uống</button>
          </div>
        </div>
        <div className="py-6">
          <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/3 bg-cover">
              <img
                src="https://i.pinimg.com/236x/16/3d/30/163d303aad2c08268538aa6b60cc6b3f.jpg"
                alt=""
              />
            </div>
            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
              <p className="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
                exercitationem fuga id nam quia
              </p>
              <div className="flex item-center mt-2">
                <svg
                  className="w-5 h-5 fill-current text-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg
                  className="w-5 h-5 fill-current text-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg
                  className="w-5 h-5 fill-current text-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg
                  className="w-5 h-5 fill-current text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
                <svg
                  className="w-5 h-5 fill-current text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              </div>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                <button 
                onClick={toggle}
                className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                  Add to Card
                </button>
                <Modal 
                isShowing={isShowing} 
                hide={toggle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
