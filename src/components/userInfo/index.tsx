import React from 'react';
import { ModalField, UserRow, Ceil, UserCard, Close } from './style';

type PropsType = {
  name: string
  lastName: string
  phone: string
  email: string
  address: string
  click(): void
};

const Modal:React.FC<PropsType> = ({ name, lastName, email, address, click, phone }) => (
  <ModalField>
    <Close onClick={click}>Назад</Close>
    <UserCard>
      <UserRow>
        <Ceil weight="600" width="20%">Имя:</Ceil>
        <Ceil weight="normal" width="60%">{name}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil weight="600" width="20%">Фамилия:</Ceil>
        <Ceil weight="normal" width="60%">{lastName}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil weight="600" width="20%">Почта:</Ceil>
        <Ceil weight="normal" width="60%">{email}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil weight="600" width="20%">Телефон:</Ceil>
        <Ceil weight="normal" width="60%">{phone}</Ceil>
      </UserRow>
      <UserRow>
        <Ceil weight="600" width="20%">Адрес:</Ceil>
        <Ceil weight="normal" width="60%">{address}</Ceil>
      </UserRow>
    </UserCard>
  </ModalField>
);

export default Modal;
