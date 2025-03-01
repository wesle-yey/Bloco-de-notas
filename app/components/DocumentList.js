import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import "../App.css";
import Modal from "./Modal";
import DeleteModal from "./DeleteModal";

export default function DocumentList() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                setDocuments(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        setSelectedId(id);
    };

    if (loading) return <p>Carregando...</p>;

    return (
        <div className="divDocumentos">
            <h1>Minhas notas</h1>
            <Modal />
            <ul className="listaDocumentos" role="list">
                {documents.map(document => (
                    <li key={document.id}>
                        <Link href={`/nota/${document.id}`}>{document.title}</Link>
                        <button onClick={() => handleDelete(document.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
            {selectedId && (
                <DeleteModal id={selectedId} onClose={() => setSelectedId(null)} />
            )}
        </div>
    );
}
