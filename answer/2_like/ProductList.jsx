import Stack from '@mui/material/Stack';
import ProductCard from './ProductCard';
import products from '../data/products.json';

export default function ProductList() {
  return (
    <Stack direction="row" spacing={2} useFlexGap sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          text={product.text}
          price={product.price}
          image={product.image}
        />
      ))}
    </Stack>
  );
}
