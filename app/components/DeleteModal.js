import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function DeleteModal({ id, onClose }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const deleteNote = async () => {
        setIsDeleting(true);
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
            alert("Nota deletada!");
            onClose();
        } catch (error) {
            console.error("Erro ao deletar:", error);
        }
        setIsDeleting(false);
    };

    return (
        <div className="modal-overlay">
            <div className="janela-modal">
                <h2>DELETE</h2>
                <p>Deseja deletar a nota?</p>
                <button onClick={deleteNote} disabled={isDeleting}>
                    {isDeleting ? "Deletando..." : "Deletar"}
                </button>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}
