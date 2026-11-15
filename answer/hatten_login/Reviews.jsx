import { useEffect, useState } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { db, auth } from '../firebase';

export default function Reviews() {
  const [text, setText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'), limit(20));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((d) => ({ id: d.id, ...d.data({ serverTimestamps: 'estimate' }) })));
    });
    return unsubscribe;
  }, []);

  // ログインしているかどうかを見張る
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return unsubscribe;
  }, []);

  const handleSubmit = async () => {
    if (text.trim() === '') return;
    try {
      // 誰が書いたか（uid）も一緒に保存する
      await addDoc(collection(db, 'reviews'), { text: text, createdAt: serverTimestamp(), uid: user.uid });
      setText('');
    } catch (error) {
      alert('投稿できませんでした（' + error.code + '）');
    }
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 640, mx: 'auto', mt: 6, textAlign: 'left' }}>
      <Typography variant="h5">お客さまの声</Typography>
      {user ? (
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
      ) : (
        <Typography color="text.secondary">投稿するにはログインしてください</Typography>
      )}
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
