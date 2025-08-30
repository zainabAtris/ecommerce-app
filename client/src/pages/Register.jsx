import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:'400px', margin:'20px auto', display:'flex', flexDirection:'column', gap:'10px'}}>
      <h2>Register</h2>
      <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button type="submit">Register</button>
    </form>
  );
}
