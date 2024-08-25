import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f9f9f9;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #444;
  }

  form div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }

  input[type="text"],
  textarea,
  select {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
    background-color: #fff;
  }

  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 10px;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  button[type="submit"] {
    display: block;
    width: 100%;
    padding: 12px;
    background-color:  var(--primary-600);
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button[type="submit"]:hover {
    background-color: var(--primary-800);
  }
`;

export default FormContainer;
