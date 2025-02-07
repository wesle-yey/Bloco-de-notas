'use client';

import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function NotasPage() {
    const { id } = useParams();
    const [nota, setNota] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setNota(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (!nota) return <p>Nota não encontrada.</p>;

    return (
        <div>
            <h3>Title: {nota.title}</h3>
            <p>Content: {nota.body}</p>
        </div>
    );
}
