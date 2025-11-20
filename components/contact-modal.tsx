"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles } from "lucide-react"

export function ContactModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="default" className="gap-2">
          <Sparkles className="h-4 w-4" />
          Let&apos;s Work Together
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get in Touch</DialogTitle>
          <DialogDescription>
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-5 pt-4">
          <div className="grid gap-4 grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Tell me about your project..." rows={4} required />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-border bg-muted">
              <span className="text-xs">reCAPTCHA</span>
            </div>
            <span>Protected by Google reCAPTCHA</span>
          </div>
          <Button type="submit" className="w-full" size="default">
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
