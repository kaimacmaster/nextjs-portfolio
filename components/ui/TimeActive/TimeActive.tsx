import { FunctionComponent } from "react";
import { format, parseISO } from "date-fns";

type Props = {
  startDate?: string;
  leaveDate?: string;
};

const DateFormatter: FunctionComponent<{
  dateString: string;
}> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

const TimeActive: FunctionComponent<Props> = ({ startDate, leaveDate }) => {
  const present = <span>Present</span>;
  if (!startDate) {
    return present;
  }

  const sdString = startDate && new Date(startDate).toISOString();
  const ldString = leaveDate && new Date(leaveDate).toISOString();

  return (
    <>
      <DateFormatter dateString={sdString} />
      {" - "}
      {(ldString && <DateFormatter dateString={ldString} />) || present}
    </>
  );
};

export default TimeActive;
