import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { FunctionComponent } from "react";

import styles from "./DetailsCard.module.css";
import utilStyles from "@/styles/utils.module.css";

interface Props {
  title: string;
  content: Document;
  description: string;
}

const DetailsCard: FunctionComponent<Props> = ({
  title,
  content,
  description,
}) => (
  <article>
    <h2 className={styles.title}>{title}</h2>
    <small className={utilStyles.lightText}>{description}</small>
    <section>{documentToReactComponents(content)}</section>
  </article>
)


export default DetailsCard;
