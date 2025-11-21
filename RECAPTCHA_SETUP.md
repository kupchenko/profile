# Google reCAPTCHA Setup Guide

This project uses Google reCAPTCHA v2 to protect the contact form from spam and abuse.

## Setup Instructions

### 1. Get Your reCAPTCHA Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click on the **+** button to register a new site
3. Fill in the form:
   - **Label**: Your site name (e.g., "Personal Portfolio")
   - **reCAPTCHA type**: Select **reCAPTCHA v2** → **"I'm not a robot" Checkbox**
   - **Domains**: Add your domain(s):
     - For development: `localhost`
     - For production: `yourdomain.com`
   - Accept the reCAPTCHA Terms of Service
4. Click **Submit**
5. You'll receive two keys:
   - **Site Key** (public key - used in the frontend)
   - **Secret Key** (private key - used in the backend)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your reCAPTCHA keys to `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_actual_site_key_here
   RECAPTCHA_SECRET_KEY=your_actual_secret_key_here
   ```

   **Important**: 
   - The `NEXT_PUBLIC_` prefix makes the site key available to the browser
   - Never expose your secret key in the frontend code
   - Add `.env.local` to `.gitignore` (it should already be there)

### 3. Restart Your Development Server

```bash
npm run dev
```

## Backend Verification (Optional but Recommended)

For production use, you should verify the captcha token on the server side:

1. In your `/api/contact/route.ts`, add verification:

```typescript
const response = await fetch(
  `https://www.google.com/recaptcha/api/siteverify`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  }
);

const data = await response.json();

if (!data.success) {
  return NextResponse.json(
    { success: false, message: 'reCAPTCHA verification failed' },
    { status: 400 }
  );
}
```

## Testing

- For local development, reCAPTCHA works on `localhost` automatically
- The form submit button will be disabled until the reCAPTCHA is completed
- The captcha will reset after form submission (success or error)

## Troubleshooting

### "Invalid site key" error
- Double-check that you copied the correct site key
- Make sure you added `localhost` to the domains in reCAPTCHA admin console
- Restart your dev server after adding environment variables

### reCAPTCHA not showing
- Check browser console for errors
- Verify `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- Check if ad blockers or privacy extensions are blocking reCAPTCHA

### Form always disabled
- Make sure you complete the reCAPTCHA checkbox
- Check if there are JavaScript errors in the console

## Resources

- [Google reCAPTCHA Documentation](https://developers.google.com/recaptcha/docs/display)
- [reCAPTCHA v2 Admin](https://www.google.com/recaptcha/admin)
