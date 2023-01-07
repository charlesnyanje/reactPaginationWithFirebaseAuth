import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Oval } from "react-loader-spinner";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios.get("https://randomuser.me/api/?results=6").then((res) => {
      setUsers(res.data.results);
      setLoading(false);
    });
  }, []);

  const usersPerPage = 1;

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div key={index}>
          <header>
            <h1>Users Page</h1>
          </header>

          <div className="container">
            <img src={user.picture.large} alt="users" className="image" />
            <p>
              {user.name.first} {user.name.last}
            </p>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <Oval color="#00BFFF" timeout={3000} />
        </div>
      ) : (
        <>
          {displayUsers}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            activeClassName={"paginationActive"}
            disabledClassName={"disabled"}
          />
        </>
      )}
    </>
  );
}

export default Users;
