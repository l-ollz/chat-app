import {
  collection,
  limitToLast,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import { formatDate } from "../library";
import { firebaseFirestore } from "../firebase/firebaseConfig";

const cache: {
  [key: string]: { lastMessageId: string | null; message: string } | null;
} = {};

export const useLastMessage = (conversationId: string) => {
  const [data, setData] = useState<{
    lastMessageId: string | null;
    message: string;
  } | null>(cache[conversationId] || null);
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(
          firebaseFirestore,
          "conversations",
          conversationId,
          "messages"
        ),
        orderBy("createdAt"),
        limitToLast(1)
      ),
      (snapshot) => {
        if (snapshot.empty) {
          setData({
            lastMessageId: null,
            message: "直近のメッセージはありません",
          });
          setLoading(false);
          setError(false);
          return;
        }
        const type = snapshot.docs?.[0]?.data()?.type;
        let response =
          type === "image"
            ? "画像"
            : type === "file"
            ? `ファイル: ${
                snapshot.docs[0]?.data()?.file?.name.split(".").slice(-1)[0]
              }`
            : type === "removed"
            ? "メッセージの送信を取り消しました"
            : (snapshot.docs[0].data().content as string);

        const seconds = snapshot.docs[0]?.data()?.createdAt?.seconds;
        const formattedDate = formatDate(seconds ? seconds * 1000 : Date.now());

        response =
          response.length > 30 - formattedDate.length
            ? `${response.slice(0, 30 - formattedDate.length)}...`
            : response;

        const result = `${response} • ${formattedDate}`;
        setData({
          lastMessageId: snapshot.docs?.[0]?.id,
          message: result,
        });
        cache[conversationId] = {
          lastMessageId: snapshot.docs?.[0]?.id,
          message: result,
        };
        setLoading(false);
        setError(false);
      },
      (err) => {
        console.error(err);
        setData(null);
        setLoading(false);
        setError(true);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [conversationId]);

  return { data, loading, error };
};
