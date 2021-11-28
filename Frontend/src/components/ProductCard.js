import React from "react";
import styled from "styled-components";
import shoe_img from "../images/shoe_image.jpeg";


const ProductHeader = styled.div`
  overflow: hidden;
  position: relative;
  height:200px;
`;


const ProductImage = styled.img`
  height: 100%;
  overflow: auto;
  width: 100%;
  bottom: 0;
  border-top-left-radius: 10px;
 
`;

const ProductFooter = styled.div`
  height: 100px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  height: 60;
`;

const NameLabel = styled.div`
  font-weight: bold;
  width:100%;
  text-align:center;
 
`;

const PriceLabel = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: #e3405f;
  text-align:center;
`;


const ProductCard = ({price}) => {
 
  return (
    <>
      <div>
        <ProductHeader>
          <ProductImage src={shoe_img} />
        </ProductHeader>
        <ProductFooter>
          <NameLabel>Shoe</NameLabel>
          <PriceLabel> ${price*0.01}</PriceLabel>
        </ProductFooter>
    </div>
    </>
  );
};

export default ProductCard;
