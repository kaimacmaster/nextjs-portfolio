import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import utilStyles from "@/styles/utils.module.css";

const WorkItem = ({title, content, description}) => {
  return (
    <article>
      <h2 style={{marginBottom: 0}}>
        {title}
      </h2>
      <small className={utilStyles.lightText}>
        {description}
      </small>
      <section>
        {documentToReactComponents(content)}
      </section>
    </article>
  )
};

export default WorkItem;
