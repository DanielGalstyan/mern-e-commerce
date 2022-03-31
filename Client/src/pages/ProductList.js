import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcment";
// import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

import { useLocation } from "react-router-dom";

function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products
            <Select name="color" onChange={handleFilter}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="size" onChange={handleFilter}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </FilterText>
        </Filter>
        <Filter>
          <FilterText>
            Sort Products
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc">Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </FilterText>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;

  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  ${mobile({
    marginRight: "0px",
  })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  ${mobile({
    margin: "10px 0px",
  })}
`;

const Option = styled.option``;
