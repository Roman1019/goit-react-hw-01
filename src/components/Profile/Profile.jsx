import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.divContainer}>
      <div className={css.profileDiv}>
        <div>
          <img className={css.imgProfile} src={image} alt="User avatar" />
          <p className={css.nameProfile}>{name}</p>
          <p className={css.tagProfile}>@{tag}</p>
          <p className={css.locationProfile}>{location}</p>
        </div>
        <ul className={css.ulProfileList}>
          <li className={css.liProfileItem}>
            <span className={`${css.spanProfile} ${css.spanProfileAccent}`}>
              Followers
            </span>
            <span className={css.spanProfile}>{stats.followers}</span>
          </li>
          <li className={css.liProfileItem}>
            <span className={`${css.spanProfile} ${css.spanProfileAccent}`}>
              Views
            </span>
            <span className={css.spanProfile}>{stats.views}</span>
          </li>
          <li className={css.liProfileItem}>
            <span className={`${css.spanProfile} ${css.spanProfileAccent}`}>
              Likes
            </span>
            <span className={css.spanProfile}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
