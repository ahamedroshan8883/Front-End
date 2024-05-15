import React, { useEffect, useState } from "react"
import "../Mens/mens.css"
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Productard/ProductCard";
import { fetchProductsByCategory } from "../../../redux/reduxAsync/categoryProducts";
export default function Womens(){
 let dispatch = useDispatch();
  const {products,Isloading} = useSelector(state=>state.categoryProductsStore)
  console.log(products);
  useEffect(()=>{
    dispatch(fetchProductsByCategory("women's clothing"));
  },[])
  
  return (<>
    <div id="mens">
    <div className="product-Con" >
    {!Isloading?products.map(item=><div className="product">
    <ProductCard product={item}></ProductCard>
      </div>):"Loading..."}
      </div>
    </div>
  </>)
};