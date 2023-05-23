// index.jsx
import * as Slider from "@radix-ui/react-slider";
import styles from "./Slider.module.scss";

export default ({ maxRange, handleChange, value }) => {
  return (
    <Slider.Root
      className={styles["SliderRoot"]}
      max={maxRange}
      orientation="horizontal"
      onValueChange={(num) => {
        handleChange(num);
      }}
      value={[value]}
    >
      <Slider.Track className={styles["SliderTrack"]}>
        <Slider.Range className={styles["SliderRange"]} />
      </Slider.Track>
      <Slider.Thumb className={styles["SliderThumb"]} />
    </Slider.Root>
  );
};
