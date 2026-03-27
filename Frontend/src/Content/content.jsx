import React, { useEffect, useState } from "react";
import "./content.css";
import axios from "../api/axios";
import Card from "../Components/Card";
const Content = ({ recommended, category, color, searchvalue, price }) => {
  // title,company,color,category,price//
  const [responses, setresponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const fetchdata = async () => {
      try {
        const result = await axios.get(`/shoe`, {
          params: {
            title: searchvalue,
            company: recommended,
            color: color,
            category: category,
            price: price,
          },
        });
        console.log(result.data);
        setresponses(result.data);
      } catch (error) {
        console.log(error);
      } finally{
        setLoading(false)
      }
    };
    fetchdata();
  }, [recommended, category, color, searchvalue, price]);
  return (
    // src,title,reviews,prevPrice,newPrice
   <div className='card-cont'>
    {loading ? (
        <div className="loading">Loading...</div>
    ) : responses && responses.length > 0 ? (
        responses.map((response) => (
            <Card
            key={response._id}
            src={response.img}
            title={response.title}
            reviews={response.reviews}
            prevPrice={response.prevPrice}
            newPrice={response.newPrice}
          />
        ))
    ) : (
        <div className="no-items">
            <h2>No Items Found</h2>
            <p>Try adjusting your filters or search terms.</p>
        </div>
    )}
</div>

  );
};

export default Content;
