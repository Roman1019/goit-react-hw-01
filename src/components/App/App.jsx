// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import userData from "../userData.json";
import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../fiends.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import transactions from "../transactions.json";

export default function App() {
  return (
    <div className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
