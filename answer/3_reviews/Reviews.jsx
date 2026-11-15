import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { db } from '../firebase';

export default function Reviews() {
  const [text, setText] = useState('');
  const [reviews, setReviews] = useState([]);

  // reviews を新しい順に20件、見張る
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((d) => ({ id: d.id, ...d.data({ serverTimestamps: 'estimate' }) })));
    });
    return unsubscribe;
  }, []);

  // 投稿ボタン：reviews に1件追加する
  const handleSubmit = async () => {
    if (text.trim() === '') return;
    try {
      await addDoc(collection(db, 'reviews'), { text: text, createdAt: serverTimestamp() });
      setText('');
    } catch (error) {
      alert('投稿できませんでした（' + error.code + '）');
    }
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 640, mx: 'auto', mt: 6, textAlign: 'left' }}>
      <Typography variant="h5">お客さまの声</Typography>
      <Stack direction="row" spacing={1}>
        <TextField
          fullWidth
          size="small"
          label="ひとこと（140字まで）"
          value={text}
          onChange={(e) => setText(e.target.value)}
          slotProps={{ htmlInput: { maxLength: 140 } }}
        />
        <Button variant="contained" onClick={handleSubmit}>投稿</Button>
      </Stack>
      {reviews.map((review) => (
        <Paper key={review.id} variant="outlined" sx={{ p: 2 }}>
          <Typography>{review.text}</Typography>
          <Typography variant="caption" color="text.secondary">
            {review.createdAt?.toDate().toLocaleString('ja-JP')}
          </Typography>
        </Paper>
      ))}
    </Stack>
  );
}
