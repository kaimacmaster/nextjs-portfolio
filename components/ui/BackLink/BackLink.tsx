import React, { FunctionComponent } from "react";
import styles from "./BackLink.module.css";
import Link from "@/components/ui/Link";

interface Props {
  backlink?: string;
}

const BackLink: FunctionComponent<Props> = ({ backlink }) => {
  let link = "/";
  let title = "home";

  if (backlink) {
    link += backlink;
    title = backlink;
  }

  return (
    <div className={styles.backToHome}>
      <Link href={link}>← Back to {title}</Link>
    </div>
  );
};

export default BackLink;
