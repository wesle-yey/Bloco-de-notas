import React from 'react';
import axios from 'axios';

const NewPostForm = () => {

  const [formValue, setformValue] = React.useState({
    titulo: '',
    conteudo: ''
  });

  const handleSubmit = async () => {
    // store the states in the form data
    const NewPostData = new FormData();
    NewPostData.append("titulo", formValue.titulo)
    NewPostData.append("conteudo", formValue.conteudo)

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "http://localhost:8080/documentos",
        data: NewPostData,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));;
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>New Post Form</p>
      <input
        type="titulo"
        name="titulo"
        placeholder="enter an title"
        value={formValue.titulo}
        onChange={handleChange}
      />
      <input
        type="conteudo"
        name="conteudo"
        placeholder="enter a conteudo"
        value={formValue.conteudo}
        onChange={handleChange}
      />
      <button
        type="submit"
      >
        Nova nota
      </button>
    </form>
  )
};

export default NewPostForm;