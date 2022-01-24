import { useUsers } from "../../contexts/users";

export default function Table() {
  const { users } = useUsers();

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
