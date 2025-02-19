'use client';

import DocumentList from "./components/DocumentList";
import { useState } from "react";
import Modal from "./components/Modal";

export default function HomePage() {
  const [openModal, setOpenModal]= useState(false)
  return (
    <div>
      <h1>Minhas notas</h1>
      <Modal/>
      <DocumentList />
    </div>
  );
}
