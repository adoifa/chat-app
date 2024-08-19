import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import upload from '../../lib/upload';
import { useUserStore } from '../../lib/userStore';

const Login = () => {
  const [avatar, setAvatar] = useState({ file: null, url: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { fetchUserInfo } = useUserStore();

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const imgUrl = avatar.file ? await upload(avatar.file) : '';

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Your account has been created, please login");

      // پس از ثبت‌نام موفق، کاربر به صفحه ورود هدایت شود
      navigate('/'); // به صفحه ورود هدایت شوید
    } catch (err) {
      console.error(err); // استفاده از console.error برای خطاها
      toast.error(`Registration failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      // پس از لاگین موفق، کاربر به صفحه چت هدایت شود
      fetchUserInfo(res.user.uid); // به‌روزرسانی وضعیت کاربر
      navigate('/chat'); // به صفحه چت هدایت شوید
    } catch (err) {
      console.error(err); // استفاده از console.error برای خطاها
      toast.error(`Login failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email' required />
          <input type="password" placeholder='Password' name='password' required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "/picture/avatar.png"} alt="Avatar preview" />
            Upload an image
          </label>
          <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
          <input type="text" placeholder='Username' name='username' required />
          <input type="text" placeholder='Email' name='email' required />
          <input type="password" placeholder='Password' name='password' required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
