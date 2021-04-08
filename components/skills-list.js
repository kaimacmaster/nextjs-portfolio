import styles from "@/components/skills-list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsList = ({ faIcons }) => {
  return (
    <ul className={styles.skillList}>
      {faIcons.map((icon) => (
        <li key={icon.iconName} className={styles.skillListItem}>
          <FontAwesomeIcon className={styles.skillListIcon} icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
