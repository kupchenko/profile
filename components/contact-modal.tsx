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
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import { Rocket } from "lucide-react";
import { submitContactForm } from "@/lib/api.service";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Skip captcha in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isDevelopment && !captchaToken) {
      toast({
        title: "Verification Required",
        description: "Please complete the reCAPTCHA verification.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitContactForm({
        ...formData,
        captchaToken,
      });

      if (result.success) {
        toast({
          title: "Success!",
          description:
            result.message || "Your message has been sent successfully.",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setOpen(false);
      } else {
        toast({
          title: "Error",
          description:
            result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
        // Reset captcha on error
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
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
        <form className="space-y-5 pt-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">{t.contact.firstName}</Label>
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
              <Label htmlFor="lastName">{t.contact.lastName}</Label>
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
            <Label htmlFor="email">{t.contact.email}</Label>
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
          <div className="space-y-2">
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea
              id="message"
              placeholder={t.contact.messagePlaceholder}
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
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
            {isSubmitting ? "Sending..." : t.contact.submit}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
