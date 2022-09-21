import React from "react";
import Layout from "../../components/Layout/Layout";
import ProductItem from "../../components/ProductItem";

const index = () => {
   const mockProduct = [
      {
         id: 1,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
      {
         id: 2,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
      {
         id: 3,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
      {
         id: 4,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
      {
         id: 5,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
      {
         id: 6,
         title: "Wireless Headphone",
         imageURL:
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
         price: 5000,
      },
   ];
   return (
      <div>
         <Layout title="Products">
            <h2 className="text-center">Featured Products</h2>
            {mockProduct.map((i) => (
               <ProductItem key={i.id} product={i} />
            ))}
         </Layout>
      </div>
   );
};

export default index;
