/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c5S7tMu1rOw
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Code1() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen flex flex-col items-center justify-center text-white">
      <header className="flex items-center justify-center mb-16">
        <RocketIcon className="text-blue-500 h-8 w-8 mr-2" />
        <h1 className="text-4xl font-bold">Todo</h1>
      </header>
      <main className="w-full max-w-2xl mx-auto p-8 bg-[#1A1A1A] rounded-lg">
        <section className="mb-16 p-8 bg-[#262626] rounded-lg">
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
        <div className="flex justify-between mb-8">
          <Input
            className="flex-1 mr-4 bg-[#262626] text-white placeholder-gray-500 border-none"
            placeholder="Add a new task"
          />
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
              <Button className="bg-blue-500 hover:bg-blue-600">Select</Button>
            </div>
            <p className="text-sm text-gray-400">
              This is a <strong>description</strong> for Task 1. It provides
              more{" "}
              <Link className="text-blue-500 underline" href="#">
                details
              </Link>{" "}
              about the task.
            </p>
            <img
              className="mt-2"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
          <div className="bg-[#262626] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg">Task 2</p>
              <Button className="bg-blue-500 hover:bg-blue-600">Select</Button>
            </div>
            <p className="text-sm text-gray-400">
              This is a <strong>description</strong> for Task 2. It provides
              more{" "}
              <Link className="text-blue-500 underline" href="#">
                details
              </Link>{" "}
              about the task.
            </p>
            <img
              className="mt-2"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-sm font-bold">
            Completed <span className="text-blue-500">2 of 5</span>
          </h2>
        </div>
      </main>
    </div>
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
