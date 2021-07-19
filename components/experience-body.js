import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";
import styles from "@/components/experience-body.module.css";
import TimeActive from "@/components/ui/TimeActive";

const ExperienceItem = ({
  companyName,
  jobTitle,
  description,
  slug,
  startDate,
  leaveDate,
}) => (
  <>
    <h3 className={styles.title}>{companyName}</h3>
    <span className={utilStyles.lightText}>{jobTitle}</span>
    <p>{description}</p>
    <small className={utilStyles.lightText}>
      <TimeActive startDate={startDate} leaveDate={leaveDate} />
      <br />
      <Link href={`/experience/${slug}`}>
        <a>Read More</a>
      </Link>
    </small>
  </>
);

export default ExperienceItem;
