import Logo from "./components/Logo";
import LoginForm from "./components/LoginForm";
import { CheckCircleIcon } from "./components/Icons";

// The things we list under "Welcome Back!"
const benefits = [
  "Access your tasks anywhere",
  "Stay organized and focused",
  "Achieve more, every day",
];

// This is the home page ("/"), so it is the first thing you see in the browser.
export default function LoginPage() {
  return (
    <main className="flex min-h-screen bg-slate-50">
      {/* ========== LEFT SIDE: welcome text (hidden on small screens) ========== */}
      <section className="relative hidden flex-1 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-12 lg:block">
        <Logo />

        <div className="relative z-10 mt-32 max-w-md">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Welcome Back!
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Log in to your account to continue managing your tasks and goals.
          </p>

          <ul className="mt-10 space-y-6">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-4">
                <CheckCircleIcon className="h-7 w-7 text-indigo-600" />
                <span className="text-slate-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative shapes at the bottom (they stand in for the laptop photo) */}
        <div className="absolute -bottom-40 -left-24 h-96 w-[130%] rounded-[50%] bg-indigo-200/50" />
        <div className="absolute -bottom-56 left-10 h-96 w-[110%] rounded-[50%] bg-indigo-500/20" />
      </section>

      {/* ========== RIGHT SIDE: the login card ========== */}
      <section className="flex flex-1 flex-col bg-white px-6 py-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* On small screens the left side is hidden, so we show the logo here */}
          <div className="lg:invisible">
            <Logo />
          </div>
          <p className="text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-semibold text-indigo-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}
