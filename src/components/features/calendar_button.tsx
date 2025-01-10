// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function CalendarFloatingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "30min",
        embedLibUrl: "https://cal.harold-delory.fr/embed/embed.js",
      });
      cal("floatingButton", {
        calLink: "harold/30min",
        calOrigin: "https://cal.harold-delory.fr",
        config: { layout: "month_view", theme: "auto" },
        buttonText: "Prenons RDV ensemble !",
        buttonColor: "#FF7900",
        buttonTextColor: "#fff",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return <></>;
}

export default CalendarFloatingButton;
