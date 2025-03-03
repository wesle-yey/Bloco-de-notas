'use client'

import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import axios from "axios";
import { redirect, useParams } from "next/navigation";

function Caderneta() {
    const { id } = useParams();
    const [nota, setNota] = useState("");
    const [loading, setLoading] = useState(true);
    const cadernoRef = useRef(null);
    const titleRef= useRef(null);

    function putNote() {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,
            {
                title:nota.title,
                body:nota.body
            }).then(
                redirect('/')
            )
    }

    useEffect(() => {
        if (!id) return;

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            //axios.get(`http://localhost:8080/documentos/${id}`)
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
            cadernoRef.current.innerHTML = nota.body; // Atualiza o conteúdo sem conflitos com React
        }
    }, [nota]);

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.innerHTML = nota.title; // Atualiza o conteúdo sem conflitos com React
        }
    }, [nota]);

    if (loading) return <p>Carregando...</p>;

    return (
        <div>
            <h1 ref={titleRef} contentEditable="true">{nota.title}</h1>
            <div ref={cadernoRef} className="caderno" contentEditable="true"
            />
            <div>
                <button onClick={() => putNote()}>Salvar</button>
            </div>
        </div>
    );
}

export default Caderneta;
