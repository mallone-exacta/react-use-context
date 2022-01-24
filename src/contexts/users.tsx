import axios from "axios";
import { useCallback } from "react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const URL = "http://localhost:8080/users";

type User = {
  id: string;
  name: string;
  email: string;
};

type NewUser = Omit<User, "id">;

export type UserContextType = {
  users: User[];
  saveUser: (user: NewUser) => Promise<void>;
  fetchUsers: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useCallback(async () => {
    const { data } = await axios.get(URL);

    setUsers(data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function saveUser(user: NewUser) {
    await axios.post(URL, user);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        saveUser,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUsers(): UserContextType {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error("Contexto de usuário não encontrado!");
  }

  return data;
}
