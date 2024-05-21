import styles from "./styles.module.css";
import clsx from "clsx";

interface ComponentProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "neobrutal";
  size?: "small" | "medium" | "large";
  label: string;
}

export function Button({
  variant = "primary",
  size = "medium",
  label,
  className,
  ...props
}: ComponentProps) {
  const mergedClasses = clsx(className, styles.button, {
    [styles[`button--${variant}`]]: variant,
    [styles[`button--${size}`]]: size,
  });

  return (
    <button type="button" className={mergedClasses} {...props}>
      {label}
    </button>
  );
}
