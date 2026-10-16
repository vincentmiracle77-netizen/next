import { BoltIcon, ShieldIcon, UsersIcon, PhoneIcon } from "./Icons";

// Each feature has an icon, a title and a short description.
// To add a new card, just add another object to this list!
const features = [
  {
    icon: BoltIcon,
    title: "Easy to Use",
    text: "Simple and intuitive interface that gets you started in minutes.",
  },
  {
    icon: ShieldIcon,
    title: "Secure & Reliable",
    text: "Your data is protected with industry-leading security.",
  },
  {
    icon: UsersIcon,
    title: "Work Together",
    text: "Collaborate with your team in real-time.",
  },
  {
    icon: PhoneIcon,
    title: "Access Anywhere",
    text: "Use TaskFlow on any device, anytime, anywhere.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">Why Choose TaskFlow?</h2>
        <p className="mt-3 text-sm text-slate-500">
          We provide the tools you need to work smarter, not harder.
        </p>
      </div>

      {/* 1 column on phones, 2 on tablets, 4 on large screens */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon; // capital letter so React treats it as a component
          return (
            <div
              key={feature.title}
              className="rounded-xl bg-white p-6 text-center shadow-md ring-1 ring-slate-100"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
