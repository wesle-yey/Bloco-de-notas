'use client'

import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import axios from "axios";
import { useParams } from "next/navigation";

function Caderneta() {
    const { id } = useParams();
    const [nota, setNota] = useState("");
    const [loading, setLoading] = useState(true);
    const cadernoRef = useRef(null); 

    useEffect(() => {
        if (!id) return;

        //axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        axios.get(`http://localhost:8080/documentos/${id}`)
            .then(response => {
                setNota(response.data || "Escreva aqui...");
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (cadernoRef.current) {
            cadernoRef.current.innerHTML = nota.conteudo; // Atualiza o conteúdo sem conflitos com React
        }
    }, [nota]);

    if (loading) return <p>Carregando...</p>;

    return (
        <div>
            <h1>{nota.titulo}</h1>
        <div ref={cadernoRef} className="caderno" contentEditable="true"
        />
        </div>
    );
}

export default Caderneta;
