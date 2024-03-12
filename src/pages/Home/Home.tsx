import { Sidebar } from "../../components/Sidebar/Sidebar";
import { useTheme } from "../../hooks";
import { HomeWrapper, Wrapper, Text } from "./Style";

export default function Home() {
  const { theme } = useTheme();
  return (
    <Wrapper>
      <Sidebar />
      <HomeWrapper theme={theme}>
        <Text theme={theme}>
          チャットを開始するには、会話を選択してください。
        </Text>
      </HomeWrapper>
    </Wrapper>
  );
}
