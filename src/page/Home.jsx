import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { authServices } from "../service/authServices";
import { Store } from "../ulti/store";

const Home = () => {
  const [store, dispatch] = useContext(Store);
  // const [showModal, setShowModal] = useState(false);
  // const [dataCategories, setDataCategories] = useState([]);
  const categories = store?.categories?.data;
  const products = store?.product?.data;
  useEffect(() => {
    authServices
      .getCategory().then((resp) => {
        dispatch({ type: "GET_CATEGORIES_SUCCESS", data: resp.data.data });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: "GET_CATEGORIES_ERROR", mess: "lỗi rồi" });
      });
  }, []);

  const handleSubmit = async (id) => {
    try {
      authServices.getProductId(id)
      .then((resp) => {
        dispatch({ type: "GET_CATEGORIES_SUCCESS", data: resp.data.data });
      })
      console.log(id);
    } catch (e) {
      console.log(e);
    }
  };
  // useEffect(() => {
  //   setDataCategories(store.categories.data);
  //   console.log(store.categories.data);
  // }, [store]);

  // `http://192.168.1.20/storage/categories/${}`
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
        <div className="py-6 flex">
          {categories.map((CategoryItem, CategoryIndex) => {
            return (
              <div className="p-4 md:w-1/2 h-fit" key={CategoryIndex}>
                <div
                  className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
                  onClick={() => handleSubmit(CategoryItem.id)}
                >
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={`http://192.168.1.20/storage/${CategoryItem.thumb}`}
                    alt="blog"
                  />
                  <div className="p-4">
                    <h1 className="title-font text-lg font-bold text-center text-3xl text-gray-600">
                      {CategoryItem.name}
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-6">
          {(products).map((product, productIndex) => {
            return (
              <>
                <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="w-1/3 bg-cover">
                    <img
                        src={`http://192.168.1.20/storage/${product.thumb}`}
                      alt=""
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">
                      {product.name}
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                      {product.price}
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
                        // onClick={toggle}
                        className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
                      >
                        Add to Card
                      </button>
                      {/* <Modal 
                isShowing={isShowing} 
                hide={toggle} /> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
