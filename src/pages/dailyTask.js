import React from "react";

import VerticalNav2 from "../components/vertical-navs/VerticalNav2";
import CreateTask from "../components/daily-task/create-task";

export default function DailyTask() {
  return (
    <React.Fragment>
      <VerticalNav2
        content={{
          brand: {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120"
          },
          "brand-small": {
            text: "Dhanai Fruits Mart",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "32"
          },
          link1: "Home",
          link2: "Product",
          link4: "Contact"
        }}
        bucketMain={[<CreateTask content={null} />]}
      />
    </React.Fragment>
  );
}
