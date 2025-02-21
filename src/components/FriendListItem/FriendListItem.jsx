import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClsx = clsx(
    css.statusFriends,
    isOnline ? css.online : css.offline
  );
  return (
    <>
      <img className={css.imgFriends} src={avatar} alt="Avatar" width="48" />
      <p className={css.nameFriends}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
