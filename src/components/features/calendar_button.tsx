import { getCalApi } from "@calcom/embed-react";
import { CalendarIcon } from "lucide-react";
import React, { useEffect } from "react";

function CalendarFloatingButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        embedJsUrl: "https://cal.harold-delory.fr/embed/embed.js",
        namespace: "standart-meeting",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      className="fixed bg-primary rounded-full p-3 md:p-5 2xl:p-7 flex justify-center align-middle bottom-5 z-50 right-5"
      data-cal-namespace="standart-meeting"
      data-cal-link="harold/standart-meeting"
      data-cal-origin="https://cal.harold-delory.fr"
      data-cal-config='{"layout":"month_view"}'
    >
      <CalendarIcon />
    </button>
  );
}

interface BookingButtonProps {
  children: React.ReactNode;
}

export const BookingButton = React.forwardRef<
  HTMLButtonElement,
  BookingButtonProps
>(({ children }, ref) => (
  <button
    data-cal-namespace="standart-meeting"
    data-cal-link="harold/standart-meeting"
    data-cal-origin="https://cal.harold-delory.fr"
    data-cal-config='{"layout":"month_view"}'
    ref={ref}
    className="bg-primary relative block w-full rounded-md h-10 font-medium"
    type="submit"
  >
    {children}
  </button>
));

export default CalendarFloatingButton;
