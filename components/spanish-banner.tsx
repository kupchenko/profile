"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function SpanishBanner() {
  const { language, t } = useLanguage();

  if (language !== "es" || !t.banner.spanishDisclaimer) {
    return null;
  }

  return (
    <Alert className="border-orange-500/50 bg-orange-500/10 text-orange-900 dark:text-orange-100">
      <AlertCircle className="h-4 w-4 text-orange-500" />
      <AlertDescription className="text-sm">
        {t.banner.spanishDisclaimer}
      </AlertDescription>
    </Alert>
  );
}

