/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ChangeEvent, createContext, useContext, useState } from "react";

import faker from "@faker-js/faker";

import { MemoUserItem } from "./components/UserItem_2";

export const FooContext = createContext<FooProviderHandles>(
  {} as FooProviderHandles
);

type FooProviderProps = {
  children: React.ReactNode;
};

type FooProviderHandles = {
  users: User[];
  handleOnAddUser: () => void;
  inputValue: string;
  handleOnInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function FooProvider({ children }: FooProviderProps) {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@decisiv.com",
      username: "johndoe",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleOnAddUser = () => {
    setUsers((oldState) => [
      ...oldState,
      {
        id: oldState.length + 1,
        name: inputValue,
        email: faker.internet.email(),
        username: faker.internet.userName(),
      },
    ]);

    setInputValue("");
  };

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const values = {
    users,
    handleOnAddUser,
    inputValue,
    handleOnInputChange,
  };

  return <FooContext.Provider value={values}>{children}</FooContext.Provider>;
}

function MyComponent() {
  const { inputValue, handleOnInputChange, users, handleOnAddUser } =
    useContext(FooContext);

  return (
    <div>
      <input value={inputValue} onChange={handleOnInputChange} />

      <div>
        {users.map((user) => (
          <MemoUserItem
            key={user.name}
            user={user}
            onButtonClick={handleOnAddUser}
          />
        ))}
      </div>
      <button type="button" onClick={handleOnAddUser}>
        Add User
      </button>
    </div>
  );
}

export default function Example4() {
  return (
    <FooProvider>
      <MyComponent />
    </FooProvider>
  );
}
