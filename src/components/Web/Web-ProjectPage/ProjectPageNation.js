import React, { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
height: 400px;`
;

const ImageWrapper = styled.div`
  position: relative;
  width: 33.33%;
  padding: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
  }

  &:hover .text {
    opacity: 1;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
`;

const Pagination = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(images.length / itemsPerPage);

  useEffect(() => { 
    console.log('받아온 정보 : ',images);
  }, [])

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderImages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    return currentImages.map((image, index) => (
      <ImageWrapper key={index}>
        <img src={image.mainImg} alt={`Image ${index + 1}`} />
        <Text className="text">{image.title}</Text>
      </ImageWrapper>
    ));
  };

  return (
    <>
      <Container>{renderImages()}</Container>
      <Text>asdfasf</Text>
      <div>
        {/* Implement pagination buttons here */}
      </div>
    </>
  );
};

export default Pagination;
