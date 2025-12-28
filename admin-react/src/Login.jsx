import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.href = "/dashboard";
    } catch(err) {
      alert("❌ Login Failed");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}
