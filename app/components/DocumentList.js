'use client';

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Modal from "./Modal"

export default function DocumentList() {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p>Carregando...</p>;

    return (
        <div>
            <ul>
                {documents.map(document => (
                    <li key={document.id}>
                        <Link href={`/nota/${document.id}`}>{document.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
