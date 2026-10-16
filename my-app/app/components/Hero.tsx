import { ArrowRightIcon } from "./Icons";

const tasks = [
  { title: "Design landing page", due: "Today", level: "High", color: "text-blue-600" },
  { title: "Build authentication", due: "Tomorrow", level: "Medium", color: "text-green-600" },
  { title: "Write documentation", due: "Apr 25", level: "Low", color: "text-green-600" },
  { title: "Deploy to production", due: "Apr 28", level: "High", color: "text-red-500" },
];

const sidebarItems = ["Dashboard", "My Tasks", "Calendar", "Settings"];

const avatarColors = ["bg-amber-400", "bg-rose-400", "bg-sky-400", "bg-emerald-400"];

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 bg-white px-6 py-16 lg:grid-cols-2">
      <div>
        <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          Organize • Track • Achieve
        </span>

        <h1 className="mt-5 text-5xl font-extrabold leading-tight text-slate-900">
          Your Productivity Partner
        </h1>

        <p className="mt-5 max-w-md leading-relaxed text-slate-600">
          TaskFlow helps you stay organized, manage your tasks, and achieve your
          goals — all in one place.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#cta"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started Free
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatarColors.map((color) => (
              <span
                key={color}
                className={`h-9 w-9 rounded-full border-2 border-white ${color}`}
              />
            ))}
          </div>
          <p className="text-xs text-slate-500">
            Trusted by 10,000+ users
            <br />
            worldwide
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-6 -top-6 h-64 w-64 rounded-full bg-indigo-200/70 blur-2xl" />

        <div className="relative flex overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-slate-100">
          <div className="hidden w-36 shrink-0 border-r border-slate-100 p-4 sm:block">
            <p className="text-xs font-bold text-slate-900">TaskFlow</p>
            <ul className="mt-5 space-y-1">
              {sidebarItems.map((item, index) => (
                <li
                  key={item}
                  className={`rounded-md px-2 py-1.5 text-xs ${
                    index === 0
                      ? "bg-indigo-50 font-medium text-indigo-600"
                      : "text-slate-500"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 p-5">
            <h3 className="text-sm font-bold text-slate-900">My Tasks</h3>
            <div className="mt-3 rounded-md border border-slate-100 px-3 py-2 text-xs text-slate-400">
              Search tasks...
            </div>

            <div className="mt-3 flex gap-2 text-xs">
              <span className="rounded bg-indigo-600 px-2 py-0.5 text-white">All</span>
              <span className="px-2 py-0.5 text-slate-500">Pending</span>
              <span className="px-2 py-0.5 text-slate-500">Completed</span>
            </div>

            <ul className="mt-3 space-y-2">
              {tasks.map((task) => (
                <li
                  key={task.title}
                  className="flex items-center gap-3 rounded-md border border-slate-100 px-3 py-2"
                >
                  <span className="h-4 w-4 shrink-0 rounded-full border border-slate-300" />
                  <div>
                    <p className="text-xs font-medium text-slate-800">{task.title}</p>
                    <p className={`text-[10px] ${task.color}`}>
                      {task.due} • {task.level}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-lg ring-1 ring-slate-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
            ✓
          </span>
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-800">Stay on track</span>
            <br />
            and get more done
          </p>
        </div>
      </div>
    </section>
  );
}
