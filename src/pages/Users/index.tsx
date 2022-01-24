import { FormEvent, useState } from "react";
import Table from "../../components/Table";
import { useUsers } from "../../contexts/users";

export default function Users() {
  const { saveUser, fetchUsers } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await saveUser({
      name,
      email,
    });

    fetchUsers();
  }

  return (
    <div>
      <h1>Página de usuários</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <br />

        <button type="submit">Cadastrar</button>
      </form>
      <br />

      <Table />
    </div>
  );
}
