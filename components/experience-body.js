import Link from "next/link";
import dynamic from "next/dynamic";
import utilStyles from "@/styles/utils.module.css";

const ExperienceItem = ({
  companyName,
  jobTitle,
  description,
  slug,
  startDate,
  leaveDate,
}) => (
  <>
    <h3 className={utilStyles.headingMd}>{companyName}</h3>
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

const DateTime = dynamic(() => import("../components/date"));

const TimeActive = ({ startDate, leaveDate }) => {
  const present = <span>Present</span>;
  if (!startDate) {
    return present;
  }

  const sdString = startDate && new Date(startDate).toISOString();
  const ldString = leaveDate && new Date(leaveDate).toISOString();

  return (
    <>
      <DateTime dateString={sdString} />
      {" - "}
      {(ldString && <DateTime dateString={ldString} />) || present}
    </>
  );
};

export default ExperienceItem;
