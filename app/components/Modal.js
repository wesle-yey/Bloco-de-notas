import { useState } from "react";

export default function BotaoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Nova nota</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Nova nota</h2>
            <input type="text" placeholder="Nome da nota" />
            <button onClick={() => setIsOpen(false)}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
}
