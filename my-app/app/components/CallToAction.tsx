import { ArrowRightIcon } from "./Icons";

export default function CallToAction() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 pb-16">
      <div className="flex flex-col items-center gap-8 rounded-2xl bg-indigo-50 p-8 md:flex-row md:p-10">
        {/* Simple decorative circle standing in for the illustration */}
        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-indigo-200 text-5xl">
          💻
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-900">
            Ready to boost your productivity?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Join thousands of people who are already getting more done with TaskFlow.
          </p>
          <a
            href="#home"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started Free
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
