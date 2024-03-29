import type { DocumentData, DocumentSnapshot } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseFirestore } from "../firebase/firebaseConfig";

const cache: { [key: string]: DocumentSnapshot<DocumentData> | undefined } = {};

export const useUsersInfo = (userIds: string[]) => {
  const [data, setData] = useState<DocumentSnapshot<DocumentData>[] | null>(
    userIds.every((id) => cache[id])
      ? userIds
          .map((id) => cache[id])
          .filter(
            (doc): doc is DocumentSnapshot<DocumentData> => doc !== undefined
          )
      : null
  );
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const response = await Promise.all(
          userIds.map(async (id) => {
            if (cache[id]) return cache[id];
            const res = await getDoc(doc(firebaseFirestore, "users", id));
            cache[id] = res;
            return res;
          })
        ).then((results) =>
          results.filter(
            (doc): doc is DocumentSnapshot<DocumentData> => doc !== undefined
          )
        );

        setData(response);
        setLoading(false);
        setError(false);
      })();
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  }, [JSON.stringify(userIds)]);

  return { data, loading, error };
};
