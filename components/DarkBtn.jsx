"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkBtn = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Asegurarse de que el componente está montado en el cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Evitar el renderizado hasta que el cliente esté montado
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-12 h-8 flex items-center justify-center">
      <button
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="w-full h-full rounded-lg flex items-center justify-center bg-[#29727C] dark:bg-[#DD798F]"
      >
        {currentTheme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-white" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
        )}
      </button>
    </div>
  );
};

export default DarkBtn;
