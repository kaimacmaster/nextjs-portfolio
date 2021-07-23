import { FunctionComponent } from "react";
import Link from "next/link";
import TimeActive from "@/components/ui/TimeActive";

import utilStyles from "@/styles/utils.module.css";
import styles from "./SummaryCard.module.css";

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
  <article>
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
  </article>
);

export default SummaryCard;
