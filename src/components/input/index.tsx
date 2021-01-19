import React, { useCallback } from 'react';
import { Input } from './style';
import UserData from '../../state/mobX';

type PropsType = {
  input(): void
};

const InputField: React.FC<PropsType> = ({ input }) => {
  const handleChangeInput = useCallback((event) => UserData.setSearch(event.target.value), []);

  return (
    <Input
      id="inputField"
      onInput={input}
      onChange={handleChangeInput}
      placeholder="Введите данные пользователя"
    />
  );
};

export default InputField;
