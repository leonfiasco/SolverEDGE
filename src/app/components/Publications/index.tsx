import React from "react";
import styles from "./styles.module.scss";

const Publications = () => {
  return (
    <div className={styles.publications}>
      <p className={styles.publicationItem}>
        <span className={styles.year}>2001:</span> &apos;Modelling Strategies in
        problem-solving&apos;. Paper presented at the Annual Conference of the
        Association for Research in Education – Perth, Australia (Lai, K.,
        Griffin, P., Mak, A., Wu, M., Dulhunty, M.)
      </p>

      <p className={styles.publicationItem}>
        <span className={styles.year}>2002:</span> &apos;Teaching Strategies in
        Problem Solving&apos;. Paper presented at the Annual Conference of the
        Association for Research in Education – Australia (Wu, M., Griffin, P.,
        Dulhunty, M., Mak, A.)
      </p>

      <p className={styles.publicationItem}>
        <span className={styles.year}>2005-2007:</span> &apos;Modelling person
        and item parameters of computer administered problem solving
        strategies&apos; with Professor Patrick Griffin as the Chief
        Investigator.
      </p>

      <p className={styles.publicationParagraph}>
        A successful application for an ARC Linkage grant (offered by the
        Federal Government of Australia) by The University of Melbourne in
        conjunction with North Shore Coaching College. The main objective of the
        project was to find out what behaviours create a strong problem solver.
        Several useful papers were produced.
      </p>

      <p className={styles.publicationItem}>
        <span className={styles.year}>2006:</span> &apos;Modelling Mathematics
        Problem Solving Item Responses using a Multidimensional IRT Model&apos;
        (Wu, M., Adams, R.)
      </p>

      <p className={styles.publicationItem}>
        <span className={styles.year}>2007-2010:</span> &apos;Computer-based
        Problem Solving&apos; with Prof Patrick Griffin, Prof Raymond Adams, Mr
        Andy Mak, Margaret Wu and Mr Nathan Zaanetti as Researchers.
      </p>

      <p className={styles.publicationParagraph}>
        Also an ARC Linkage grantee. In addition to a number of research papers,
        the project also produced a model describing how a student tends to
        solve problems. Of the six profiles identified, each has a set of
        intervention strategies.
      </p>
    </div>
  );
};

export default Publications;
