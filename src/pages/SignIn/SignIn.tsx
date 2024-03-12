import type { AuthProvider } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { firebaseAuth } from "../../firebase/firebaseConfig";
import { useUserStore } from "../../hooks";
import toast from "react-hot-toast";
import { ButtonWrapper, Container, TextWrapper, Wrapper } from "./Style";

export default function SignIn() {
  const { currentUser } = useUserStore();

  const [loading, setLoading] = useState(false);

  const handleSignIn = (provider: AuthProvider) => {
    setLoading(true);

    signInWithPopup(firebaseAuth, provider)
      .then(() => {
        // console.log("サインイン! ✅");
      })
      .catch(() => {
        toast.error(`エラーが発生しました。`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (currentUser) return <Navigate to="/" />;

  return (
    <Container>
      <img src="/home.png" alt="A chat bubble." />
      <Wrapper>
        <TextWrapper>
          <h1>チャットアプリ</h1>

          <h2>今すぐチャットアプリを始めよう!</h2>
        </TextWrapper>

        <ButtonWrapper>
          <button
            disabled={loading}
            onClick={() => handleSignIn(new GoogleAuthProvider())}>
            Googleアカウントでサインイン
          </button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}
