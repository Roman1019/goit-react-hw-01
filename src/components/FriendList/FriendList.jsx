import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "./FriendList.module.css";

export default function FriendList({ items }) {
  return (
    <ul className={css.ulList}>
      {items.map((item) => (
        <li className={css.liItem} key={item.key}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
