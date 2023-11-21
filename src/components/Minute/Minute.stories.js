import { Minute } from ".";

export default {
  title: "Components/Minute",
  component: Minute,
  argTypes: {
    minutes: {
      options: [
        "minute-08",
        "minute-01",
        "minute-03",
        "default",
        "minute-05",
        "minute-07",
        "minute-06",
        "minute-04",
        "minute-02",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    minutes: "minute-08",
  },
};
