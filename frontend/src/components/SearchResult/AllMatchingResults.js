import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
// this component is used to display all the products in a grid.
// It is used in all components that need to display the products (for example Homepage.js, Brands.js, Category.js etc)
const AllMatchingResults = ({ arts }) => {
  const navigate = useNavigate();
  return (
    <>
      <Products>
        {arts?.map((art) => {
          return (
            <Product to={`/product/${art._id}`} key={art._id}>
              <ImageContainer
                onClick={() => {
                  navigate('/art-detail/:_id');
                }}
              >
                <Image src={art.url} />
              </ImageContainer>
              <Name>{art.name}</Name>
              <Style>{art.style}</Style>
              {/* <Bottom>
                <Price>{art.price}</Price>
                <Status className={art.numInStock > 0 ? '' : 'outOfStock'}>
                  {art.numInStock > 0 ? 'In Stock' : 'Out of stock'}
                </Status>
              </Bottom> */}
            </Product>
          );
        })}
      </Products>
    </>
  );
};

const Style = styled.div``;

const Products = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 1200px;
  margin: auto;

  margin-bottom: 50px;
`;
const Product = styled(Link)`
  border: 1px solid #cccccc;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  color: black;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  padding: 10px 12px;
  font-size: 16px;
  padding: 20px 10px;
  width: 100%;
  text-align: left;
`;
const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Status = styled.div`
  background-color: #e3fcf7;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  &.outOfStock {
    background-color: #f3f3f3;
  }
`;
const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`;
const Image = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

export default AllMatchingResults;
