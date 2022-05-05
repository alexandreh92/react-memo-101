/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useMemo, useState } from "react";

import faker from "@faker-js/faker";

import UserItem, { MemoUserItem } from "./components/UserItem_2";

// This example illustrates how React.useCallback works

// When it should be used:
// 1. When it's inside a context;
// 2. When some other hook is using it, like useMemo, useEffect
// 3. When you're passing the function to a children / When other components are using
// the same function
// 4. When your component changes its props too often (e.g. a state controlling an input)

export default function Example2() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@decisiv.com",
      username: "johndoe",
    },
  ]);

  const handleOnClick = () => {
    setUsers((oldState) => [
      ...oldState,
      {
        id: oldState.length + 1,
        name: faker.name.findName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
      },
    ]);
  };

  const handleOnButton2Click = () => {
    // do some code
  };

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Add User
      </button>
      {users.map((user) => (
        <MemoUserItem
          key={user.name}
          user={user}
          onButtonClick={handleOnButton2Click}
        />
      ))}
    </div>
  );
}
