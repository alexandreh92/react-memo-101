/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

import faker from "@faker-js/faker";

import UserItem from "./components/UserItem";

// This example illustrates how React.memo function works
// Tip: React reconcilliation state compares the Tree whislt memo compares props

// When it should be used:
// 1. Pure functional components (don't have external dependencies like: a Date, user's
// browser info, or something that can suddenly change)
// 2. Component renders too often (when the parent changes its state too often, like
// an input changing everytime you type)
// 3. Re-renders with same props (components that you're passing static props, like
// static texts, or properties that never change)
// 4. Components with medium and big sizes (when you have a lot of functionalities and
// states changing inside it)

// When not to use it:
//! 1. When you're passing children to the component because it always generates a new array.
// 2. Component often re-renders with props, that have changed anyway
// 3. Component is cheap to re-render
// 4. Comparison function is expensive to perform (a.k.a. number of props exceeds number of nodes + functions)

export default function Example1() {
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

  return (
    <div>
      <button type="button" onClick={handleOnClick}>
        Add User
      </button>
      {users.map((user) => (
        <UserItem key={user.name} user={user} />
      ))}
    </div>
  );
}
