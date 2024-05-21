import styles from "./styles.module.css";
import clsx from "clsx";

interface ComponentProps extends React.ComponentProps<"h1"> {
  variant?: "primary";
  size?: "small" | "medium" | "large"; // Add size property
  title: string;
}

export function Title({
  variant,
  size,
  title,
  className,
  ...props
}: ComponentProps) {
  // Tailwind class oluyor
  const mergedClasses = clsx(className, styles.title, {
    [styles[`title--${variant}`]]: variant,
    [styles[`title--${size}`]]: size,
  });

  return (
    <h1 className={mergedClasses} {...props}>
      {title}
    </h1>
  );
}
