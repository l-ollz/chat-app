import { useState } from "react";
import { Button, Buttons } from "./Style";
import { Files } from "./Files";
import { ImageItem } from "./Images";
import { Modal } from "../Core";

type ViewMediaProps = {
  theme: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export function ViewMedia({ setIsOpen, theme, isOpen }: ViewMediaProps) {
  enum Sections {
    images,
    files,
    theme,
  }
  const [selectedSection, setSelectedSection] = useState(Sections.images);

  return (
    <Modal
      theme={theme}
      isOpen={isOpen}
      title={"写真とファイルを見る"}
      onClose={() => setIsOpen(false)}>
      <Buttons theme={theme}>
        <Button
          theme={theme}
          isActive={selectedSection === Sections.images}
          onClick={() => setSelectedSection(Sections.images)}>
          写真
        </Button>
        <Button
          theme={theme}
          isActive={selectedSection === Sections.files}
          onClick={() => setSelectedSection(Sections.files)}>
          ファイル
        </Button>
      </Buttons>
      {selectedSection === Sections.images ? (
        <ImageItem />
      ) : selectedSection === Sections.files ? (
        <Files theme={theme} />
      ) : (
        <></>
      )}
    </Modal>
  );
}
