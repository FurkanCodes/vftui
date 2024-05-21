import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

interface CardProps extends React.ComponentProps<"div"> {
  header: string;
}

export function Card({ header, children, className, ...props }: CardProps) {
  const headerClass = clsx(styles.header, className);

  return (
    <div className={styles.card} {...props}>
      <h2 className={headerClass}>{header}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}
