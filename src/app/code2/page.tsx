/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cLNTmTK30Gv
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Code2() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen flex flex-col text-white">
      <header className="w-full bg-[#1A1A1A] p-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <RocketIcon className="text-blue-500 h-8 w-8" />
          <h1 className="text-4xl font-bold">FocusFry</h1>
        </div>
        <nav className="flex items-center space-x-8">
          <Link className="text-lg hover:text-blue-500" href="#">
            Calendar
          </Link>
          <Link className="text-lg hover:text-blue-500" href="#">
            Projects
          </Link>
          <Link className="text-lg hover:text-blue-500" href="#">
            Reports
          </Link>
          <Button className="bg-blue-500 hover:bg-blue-600">Login</Button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <section className="w-full max-w-2xl mx-auto bg-[#1A1A1A] rounded-lg p-8 mb-16">
          <header className="flex items-center justify-center mb-8">
            <TimerIcon className="text-red-500 h-8 w-8 mr-2" />
            <h2 className="text-2xl font-bold">Pomodoro Timer</h2>
          </header>
          <div className="flex items-center justify-center text-6xl font-bold mb-8">
            <span>25:00</span>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Button className="bg-red-500 hover:bg-red-600">Start</Button>
            <Button className="bg-gray-500 hover:bg-gray-600">Reset</Button>
          </div>
        </section>
        <div className="w-full max-w-2xl mx-auto bg-[#1A1A1A] rounded-lg p-8">
          <div className="mb-4">
            <h2 className="text-sm font-bold">
              Completed <span className="text-blue-500">2 of 5</span>
            </h2>
          </div>
          <div className="flex justify-between mb-8">
            <Button className="bg-blue-500 hover:bg-blue-600">
              Create <PlusIcon className="ml-2" />
            </Button>
          </div>
          <div className="mb-4">
            <h2 className="text-sm font-bold">
              Tasks Created <span className="text-blue-500">5</span>
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#262626] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg">Task 1</p>
                <Button className="bg-transparent p-1">
                  <DotIcon className="text-gray-400" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                This is a description for Task 1. It provides more details about
                the task.
              </p>
            </div>
            <div className="bg-[#262626] p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg">Task 2</p>
                <Button className="bg-transparent p-1">
                  <DotIcon className="text-gray-400" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                This is a description for Task 2. It provides more details about
                the task.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TimerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}
