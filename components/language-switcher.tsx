"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
] as const;

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 px-2 cursor-pointer">
          <Languages className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2" align="end">
        <div className="space-y-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant={language === lang.code ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start cursor-pointer"
              onClick={() => setLanguage(lang.code)}
            >
              <span className="mr-2 text-lg">{lang.flag}</span>
              <span className="flex-1 text-left">{lang.name}</span>
              {language === lang.code && (
                <Check className="h-4 w-4 text-blue-500" />
              )}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
