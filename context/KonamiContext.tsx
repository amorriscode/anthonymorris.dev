import { useState, createContext, useContext, useEffect } from "react";

type State = { input: number[]; activated: boolean };

const KonamiStateContext = createContext<State | undefined>(undefined);

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

export function KonamiProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState<number[]>([]);
  const [activated, setActivated] = useState<boolean>(false);

  const onKeyUp = (e: any) => {
    e.preventDefault();
    if (!activated) {
      setInput((old: number[]) => [...old, e.keyCode]);
    }
  };

  useEffect(() => {
    // Reset the konami code
    const timeout = setTimeout(() => {
      if (!activated && input.length) {
        setInput([]);
      }
    }, 2000);

    // The code was entered correctly
    if (!activated && input.join("") === konamiCode.join("")) {
      setActivated(true);
    }

    return () => clearTimeout(timeout);
  }, [input]);

  useEffect(() => {
    // Listen to key events so we can detect the konami code
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <KonamiStateContext.Provider value={{ input, activated }}>
      {children}
    </KonamiStateContext.Provider>
  );
}

export function useKonamiState() {
  const context = useContext(KonamiStateContext);

  if (context === undefined) {
    throw new Error("useKonamiState must be used within a KonamiProvider");
  }

  return context;
}
