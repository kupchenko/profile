"use client";

import { useState, useRef } from "react";
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
import { useLanguage } from "@/contexts/language-context";
import { Bell } from "lucide-react";
import { submitWaitingList } from "@/lib/api.service";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

interface NotifyWhenLiveModalProps {
  projectName: string;
}

export function NotifyWhenLiveModal({ projectName }: NotifyWhenLiveModalProps) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Skip captcha in development mode
  const isDevelopment = process.env.NODE_ENV === "development";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isDevelopment && !captchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitWaitingList({
        ...formData,
        projectName,
        captchaToken: captchaToken || undefined,
      });

      if (result.success) {
        toast.success(
          result.message ||
            "You're on the list! We'll notify you when it's live.",
          { duration: 5000 }
        );
        setFormData({ firstName: "", lastName: "", email: "" });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setOpen(false);
      } else {
        toast.error(
          result.message || "Failed to join waiting list. Please try again."
        );
        // Reset captcha on error
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      // Reset captcha on error
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full cursor-pointer" size="lg">
          <Bell className="mr-2 h-4 w-4" />
          {t.projectsPage.buttons.notify}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t.notifyWhenLive.title}
          </DialogTitle>
          <DialogDescription>{t.notifyWhenLive.description}</DialogDescription>
        </DialogHeader>
        <form className="space-y-5 pt-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.notifyWhenLive.firstName}</Label>
              <Input
                id="firstName"
                placeholder="John"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">{t.notifyWhenLive.lastName}</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.notifyWhenLive.email}</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              disabled={isSubmitting}
            />
          </div>
          {!isDevelopment && (
            <div className="flex justify-center">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
                onErrored={() => setCaptchaToken(null)}
              />
            </div>
          )}
          <Button
            type="submit"
            className="w-full cursor-pointer"
            size="default"
            disabled={isSubmitting || (!isDevelopment && !captchaToken)}
          >
            {isSubmitting ? "Submitting..." : t.notifyWhenLive.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
