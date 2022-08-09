import styles from "./Sidebar.module.scss";

function Sidebar({ post }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{post.title}</div>
        </div>
    );
}

export default Sidebar;
