import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import styles from "./SkillsList.module.css";

interface Props {
  faIcons: Array<Icon>;
}

const SkillsList: FunctionComponent<Props> = ({ faIcons }) => {
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
