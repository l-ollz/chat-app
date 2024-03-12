import { doc } from "firebase/firestore";
import { useParams } from "react-router-dom";

import toast from "react-hot-toast";
import { useDocumentQuery } from "../../hooks";
import { firebaseFirestore } from "../../firebase/firebaseConfig";
import { FileIcon } from "../Media/FileIcon";
import { formatFileSize } from "../../library/utilities";
type ReplyBadgeProps = {
  messageId: string;
};
export function ChatReplyBadge({ messageId }: ReplyBadgeProps) {
  const { id: conversationId } = useParams();

  const { data, loading, error } = useDocumentQuery(
    `message-${messageId}`,
    doc(
      firebaseFirestore,
      "conversations",
      conversationId as string,
      "messages",
      messageId
    )
  );

  if (loading || error) return <div>ロード中</div>;

  return (
    <>
      <div
        onClick={() => {
          const element = document.querySelector(`#message-${messageId}`);
          if (element) element.scrollIntoView({ behavior: "smooth" });
          toast.error(
            "メッセージが見つかりません。再度スクロールしてください。"
          );
        }}>
        {data?.data()?.type === "text" ? (
          <p>{data?.data()?.content}</p>
        ) : data?.data()?.type === "image" ? (
          <>
            <img
              className="image"
              title={data?.id}
              src={data?.data()?.content}
              alt="image"
              style={{ width: "200px" }}
            />
            <p style={{ fontSize: "0.865rem" }}>画像にリプライ</p>
          </>
        ) : data?.data()?.type === "file" ? (
          <>
            <FileIcon
              extension={
                data?.data()?.file?.name.split(".").slice(-1)[0] as string
              }
            />
            <div>
              <p>{data?.data()?.file?.name}</p>
              <p>{formatFileSize(data?.data()?.file?.size as number)}</p>
            </div>
            <p style={{ fontSize: "0.865rem" }}>ファイルにリプライ</p>
          </>
        ) : (
          "メッセージの送信を取り消しました"
        )}
      </div>
    </>
  );
}
