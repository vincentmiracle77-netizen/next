"use client";
// "use client" is needed because this component uses state (useState)
// and reacts to user actions (typing, clicking). Those only work in the browser.

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  GoogleIcon,
} from "./Icons";

// A simple regular expression that checks an email looks like "name@site.com"
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The shape of our error messages. Each one is optional because
// a field only has an error message when something is wrong with it.
type FormErrors = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const router = useRouter(); // lets us move to another page from code

  // ----- State: values React remembers and re-renders when they change -----
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // ----- Validation: check the inputs and return a list of problems -----
  function validate(): FormErrors {
    const newErrors: FormErrors = {};

    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (password === "") {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  }

  // ----- Runs when the user clicks "Log In" (or presses Enter) -----
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser from reloading the page

    const newErrors = validate();
    setErrors(newErrors);

    // If there is at least one error, stop here and show the messages.
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Everything is valid! Pretend to log in for a moment, then go to the landing page.
    // (In a real app you would send the email and password to your server here.)
    setIsLoading(true);
    setTimeout(() => {
      router.push("/landing");
    }, 800);
  }

  // Returns the border classes for an input box.
  // When there is an error the border turns red, otherwise it is gray (indigo when focused).
  function inputBorder(hasError: boolean) {
    return hasError
      ? "border-red-400 focus-within:ring-red-100"
      : "border-slate-200 focus-within:border-indigo-500 focus-within:ring-indigo-100";
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-indigo-100/60">
      <h2 className="text-2xl font-bold text-slate-900">
        Login to Your Account
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        Enter your email and password to access your account.
      </p>

      {/* noValidate turns off the browser's own popups so we can show our own messages */}
      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
        {/* ---------- Email ---------- */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Email Address
          </label>
          <div
            className={`flex items-center gap-3 rounded-lg border bg-white px-3 focus-within:ring-4 ${inputBorder(
              Boolean(errors.email)
            )}`}
          >
            <MailIcon className="h-5 w-5 shrink-0 text-slate-500" />
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* ---------- Password ---------- */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-slate-800"
          >
            Password
          </label>
          <div
            className={`flex items-center gap-3 rounded-lg border bg-white px-3 focus-within:ring-4 ${inputBorder(
              Boolean(errors.password)
            )}`}
          >
            <LockIcon className="h-5 w-5 shrink-0 text-slate-500" />
            <input
              id="password"
              // The type switches between "password" (dots) and "text" (readable)
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-slate-500 hover:text-indigo-600"
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* ---------- Remember me + Forgot password ---------- */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-slate-300 accent-indigo-600"
            />
            Remember me
          </label>
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Forgot password?
          </a>
        </div>

        {/* ---------- Submit button ---------- */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-indigo-600 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </form>

      {/* ---------- "OR" divider ---------- */}
      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">OR</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      {/* ---------- Google button (design only, it does not log in yet) ---------- */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        <GoogleIcon className="h-5 w-5" />
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-slate-700">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-semibold text-indigo-600 hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
}

