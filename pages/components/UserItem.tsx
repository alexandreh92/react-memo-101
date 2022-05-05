import React, { memo } from "react";

type UserItemProps = {
  user: User;
};

function UserItem({ user }: UserItemProps) {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
    </div>
  );
}

export const MemoUserItem = memo(UserItem);

export default UserItem;
