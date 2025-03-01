import { useState } from "react";
import NewPostForm from "./NewPostForm"
import "../App.css"

export default function BotaoModal(action) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Nova nota</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="janela-modal">
            <NewPostForm/>
            <button onClick={() => setIsOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}
