import { FunctionComponent } from "react";
import Link from "next/link";
import utilStyles from "@/styles/utils.module.css";
import styles from "./SummaryCard.module.css";
import TimeActive from "@/components/ui/TimeActive";

interface Props {
  companyName: string;
  jobTitle: string;
  description: string;
  slug: string;
  startDate: string;
  leaveDate: string;
}

const SummaryCard: FunctionComponent<Props> = ({
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

export default SummaryCard;
