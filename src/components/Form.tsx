"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="mt-20 mx-auto w-full max-w-md rounded-none bg-black p-4 md:rounded-2xl md:p-8 text-white shadow-[0_0_10px_1px_rgba(13,148,136,0.2)]">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Us....
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="text">Your Message</Label>
          <Input id="msg" placeholder="Your Message" type="text" />
        </LabelInputContainer>

        <button
          className="text-white group/btn relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
        <h3 className="text-center mt-4">Follow us on</h3>
        <div className="mt-6 flex justify-center space-x-6 text-white">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <IconBrandInstagram className="h-6 w-6 hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin className="h-6 w-6 hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IconBrandGithub className="h-6 w-6 hover:text-gray-300 transition-colors duration-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
          >
            <IconBrandX className="h-6 w-6 hover:text-neutral-400 transition-colors duration-300" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
