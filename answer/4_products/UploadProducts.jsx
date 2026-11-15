// products.json の中身を、Firestore の products に入れるボタン（1回押したら外す）
import { doc, setDoc } from 'firebase/firestore';
import Button from '@mui/material/Button';
import { db } from '../firebase';
import products from '../data/products.json';

export default function UploadProducts() {
  const handleClick = async () => {
    try {
      for (const product of products) {
        await setDoc(doc(db, 'products', String(product.id)), product);
      }
      alert('products.json の ' + products.length + ' 件を Firestore に入れました');
    } catch (error) {
      alert('入れられませんでした（' + error.code + '）');
    }
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      products.json を Firestore に入れる
    </Button>
  );
}
