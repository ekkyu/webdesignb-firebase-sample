import { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { auth } from '../firebase';

export default function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ログインしているかどうかを見張る
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => setUser(currentUser));
    return unsubscribe;
  }, []);

  const run = async (action) => {
    try {
      await action(auth, email, password);
      setPassword('');
    } catch (error) {
      alert('できませんでした（' + error.code + '）');
    }
  };

  if (user) {
    return (
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', mb: 3 }}>
        <Typography>{user.email} でログイン中</Typography>
        <Button variant="outlined" onClick={() => signOut(auth)}>ログアウト</Button>
      </Stack>
    );
  }

  return (
    <Stack direction="row" spacing={1} useFlexGap sx={{ justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
      <TextField size="small" label="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField size="small" label="パスワード（6文字以上）" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={() => run(signInWithEmailAndPassword)}>ログイン</Button>
      <Button variant="outlined" onClick={() => run(createUserWithEmailAndPassword)}>新規登録</Button>
    </Stack>
  );
}
