import React from 'react'
// rafce

interface User {
  id: string,
  name: string
}

const UsersPage= async()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next:{revalidate: 10}}); // it will run a bg job and get frash data in evey 10 sec 
    // imp: cashing implement only on fetch
    const users: User[] = await res.json();
// console.log("D: ", users);
  return (
    <>
    <div>user page</div>
    <ul>
      {users.map(user => <li key= {user.id}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage