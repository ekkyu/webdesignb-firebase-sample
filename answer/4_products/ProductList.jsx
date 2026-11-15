import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import Stack from '@mui/material/Stack';
import ProductCard from './ProductCard';
import { db } from '../firebase';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // products.json の代わりに、Firestore の products を id の順に見張る
  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('id'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setProducts(snapshot.docs.map((d) => d.data()));
    });
    return unsubscribe;
  }, []);

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
