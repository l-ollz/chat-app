import { Container } from "./Style";

export default function PageNotFound() {
  return (
    <Container>
      <p>
        404. Page not found
        <br />
        ページが存在しません。
      </p>

      <a href="/">ホーム画面に戻る</a>
    </Container>
  );
}
