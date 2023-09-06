"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
const AuthBtn = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <div className="auth-btn">
        <button onClick={() => signIn()}>Login</button>
      </div>
    );
  }
  return (
    <div className="auth-btn">
      <div className="dropdown">
        <button className="dropdown-btn !py-1">hello</button>
        <ul className="dropdown-list opacity-0 invisible">
          <li className="dropdown-item">
            <button onClick={() => signOut()} className="cta">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AuthBtn;
