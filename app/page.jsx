'use client';

import DocumentList from "./components/DocumentList";
import { useState } from "react";
import "./App.css"

export default function HomePage() {
  const [openModal, setOpenModal]= useState(false)
  return (
    <div>
      <DocumentList />
    </div>
  );
}
