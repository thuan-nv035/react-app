import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authServices } from "../service/authServices";
import { getListCategoriesSuccess } from "../action/categories";
const Category = () => {
  const dispatch = useDispatch();

  const temp = useSelector((state) => state);

  useEffect(() => {
    console.log("2347654");
    authServices
      .getCategory()
      .then((resp) => {
        dispatch(getListCategoriesSuccess({ data: resp.data.data }));
      })
      .catch((e) => {
        console.log(e);
        dispatch(getListCategoriesSuccess({ mess: "false" }));
      });
  }, []);

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
        {/* <div className="py-6 flex">
          {temp.map((CategoryItem, CategoryIndex) => {
            return (
              <div className="p-4 md:w-1/2 h-fit" key={CategoryIndex}>
                <div
                  className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden"
                  //   onClick={() => handleSubmit(CategoryItem.id)}
                >
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={`http://192.168.1.43/storage/${CategoryItem.thumb}`}
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
        </div> */}
      </div>
    </>
  );
};

export default Category;
