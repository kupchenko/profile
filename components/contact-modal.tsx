"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import { Rocket } from "lucide-react";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="default" className="gap-2 cursor-pointer">
          <Rocket className="h-4 w-4" />
          {t.hero.cta.workTogether}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.contact.title}</DialogTitle>
          <DialogDescription>{t.contact.description}</DialogDescription>
        </DialogHeader>
        <form className="space-y-5 pt-4">
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.contact.firstName}</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.contact.lastName}</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.contact.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea
              id="message"
              placeholder={t.contact.messagePlaceholder}
              rows={4}
              required
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-border bg-muted">
              <span className="text-xs">reCAPTCHA</span>
            </div>
            <span>{t.contact.recaptcha}</span>
          </div>
          <Button
            type="submit"
            className="w-full cursor-pointer"
            size="default"
          >
            {t.contact.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
