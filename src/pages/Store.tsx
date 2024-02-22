import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import StoreItem from '../components/StoreItem';

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      {/* in mid size we have 2 cols, in extrasmall 1, and in large 3 */}
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
