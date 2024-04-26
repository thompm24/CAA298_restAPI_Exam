import { useState, useEffect } from 'react'

function AllCustomers() {

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
      try {
       const response = await(fetch("http://127.0.0.1:8000/api/customer/"));
        const jsonData = await response.json();
        setCustomers(jsonData);
      }
      catch (error) {
        console.error("Failed to fetch data", error);
      }
      }
      fetchData();
    }, []
  );
  return (
    <>
      <ul>
        {customers.map((customer) => {
          return (
            <li key={customer.url}>
              <h1>{customer.name}</h1>
              <p>{customer.email}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default AllCustomers;
