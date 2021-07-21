import { Children } from 'react';

const ModalForm = ({ children, closeModal }) => {
  return <form>{(children, closeModal)}</form>;
};

export default ModalForm;
