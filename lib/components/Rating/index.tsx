import { useState } from "react";
import styles from "./styles.module.css";

interface SmartRatingProps {
  title?: string;
  theme: "primary" | "secondary";
  disabled?: boolean;
  onChange?: (value: number) => void;
  count?: number;
}

export const Rating: React.FC<SmartRatingProps> = ({
  title,
  theme,
  onChange,
  count = 5,
}) => {
  const stars = Array.from({ length: count }, (_, i) => i + 1);
  const [rating, setRating] = useState<number>(0);

  const ratingClass = theme === "primary" ? styles.primary : styles.secondary;

  const handleStarClick = (star: number) => {
    setRating(star);
    if (onChange) {
      onChange(star);
    }
  };

  return (
    <div className={`${ratingClass} ${styles.rating}`}>
      <h1>{title}</h1>
      <div className={styles.starsContainer}>
        {stars.map((star, index) => {
          const starCss =
            star <= rating ? styles.starActive : styles.starInactive;
          return (
            <div
              data-testid={index}
              key={star}
              className={`${starCss}`}
              onClick={() => handleStarClick(star)}
            >
              <span className={styles.star}>★</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
