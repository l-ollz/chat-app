import { useState } from "react";
import { Modal } from "../../Core";
import { Buttons, Button } from "./Style";
import { ConversationInfoType } from "../../../library";
import { AddMembers } from "./Addmembers";
import { Admin } from "./Admin";
import { Members } from "./Members";

type ChatViewGroupProps = {
  isOpen: boolean;
  theme: string;
  setIsOpen: (value: boolean) => void;
  conversation: ConversationInfoType;
};

export function ChatViewGroup({
  isOpen,
  setIsOpen,
  conversation,
  theme,
}: ChatViewGroupProps) {
  enum Sections {
    members,
    admins,
    addMembers,
  }
  const [selectedSection, setSelectedSection] = useState(Sections.members);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      onClose={handleClose}
      theme={theme}
      title={"メンバー管理"}
      isOpen={isOpen}>
      <div onClick={(event) => event.stopPropagation()}>
        <Buttons theme={theme}>
          <Button
            theme={theme}
            onClick={() => setSelectedSection(Sections.members)}
            isActive={selectedSection === Sections.members}>
            メンバー
          </Button>
          <Button
            theme={theme}
            onClick={() => setSelectedSection(Sections.admins)}
            isActive={selectedSection === Sections.admins}>
            管理者
          </Button>
          <Button
            theme={theme}
            onClick={() => setSelectedSection(Sections.addMembers)}
            isActive={selectedSection === Sections.addMembers}>
            メンバーを招待
          </Button>
        </Buttons>
        {selectedSection === Sections.members ? (
          <Members theme={theme} conversation={conversation} />
        ) : selectedSection === Sections.admins ? (
          <Admin theme={theme} conversation={conversation} />
        ) : selectedSection === Sections.addMembers ? (
          <AddMembers theme={theme} conversations={conversation} />
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
}
