import { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import Filter from "./components/Filter";
import Error from "./components/Error";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newText) => {
    setFilterText(newText);
  };

  const usersAfterFilter = () => {
    if (!filterText) {
      return users;
    }

    const filterData = users.filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
    return filterData;
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <Error message={"Somting went wrong"} />;
  }
  return (
    <div>
      <Filter
        filteredValue={filterText}
        onFilterChange={(text) => handleFilterChange(text)}
      />
      <UserList users={usersAfterFilter()} />
    </div>
  );
}
