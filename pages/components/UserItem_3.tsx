import React, { memo, useContext } from "react";

import { FooContext } from "../example_4";

type UserItemProps = {
  user: User;
};

function UserItem({ user }: UserItemProps) {
  const { handleOnAddUser } = useContext(FooContext);

  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
      <button type="button" onClick={handleOnAddUser}>
        Click-me
      </button>
    </div>
  );
}

export const MemoUserItem = memo(UserItem);

export default UserItem;
