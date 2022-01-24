import { UserProvider } from "./contexts/users";
import Users from "./pages/Users";

function App() {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
}

export default App;
