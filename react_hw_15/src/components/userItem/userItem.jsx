function UserItem({ user }) {
  return (
    <article>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </article>
  );
}

export default UserItem;
