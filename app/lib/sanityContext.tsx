"use client";

import { createContext, useContext } from "react";

export interface SiteSettings {
  logo?: { url: string; alt: string };
  callToAction: {
    title: string;
    description: string;
    bgImageLeft: { url: string };
    bgImageRight: { url: string };
  };
  footer: {
    headingPart1: string;
    headingPart2: string;
    text?: string;
    socialLinks?: { url: string; alt: string; href: string }[];
  };
  contactButton?: { text: string; icon: { url: string } };
  scheduleButton?: { text: string; icon: { url: string } };
}

const SanityContext = createContext<SiteSettings | null>(null);

export const SanityProvider = ({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: SiteSettings | null;
}) => {
  return (
    <SanityContext.Provider value={initialData}>
      {children}
    </SanityContext.Provider>
  );
};

export const useSanityData = () => {
  const context = useContext(SanityContext);
  if (!context)
    throw new Error("useSanityData must be used within a SanityProvider");
  return context;
};
