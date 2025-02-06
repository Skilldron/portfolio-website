import { useTheme } from "@/components/theme-provider";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex flex-row gap-5 ">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <SunIcon size={30} />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <MoonIcon size={30} />
        </button>
      )}
    </div>
  );
}
