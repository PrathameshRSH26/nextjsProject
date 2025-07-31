"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/utils";

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

interface EnrollmentFormProps {
  courseName?: string;
  coursePrice?: string;
}

const EnrollmentForm = ({ courseName = "Course", coursePrice = "$299" }: EnrollmentFormProps) => {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState(courseName);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam) {
      setSelectedCourse(courseParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enrollment form submitted");
    // Here you would typically handle the form submission
    alert("Thank you for your enrollment! We will contact you soon.");
  };

  const courses = [
    { name: "Basic Music Theory", price: "$199", duration: "8 weeks" },
    { name: "Advanced Composition", price: "$399", duration: "12 weeks" },
    { name: "Song Writing", price: "$299", duration: "10 weeks" },
    { name: "Music Production", price: "$499", duration: "16 weeks" },
    { name: "Piano Basics & Theory", price: "$249", duration: "10 weeks" },
    { name: "Guitar Mastery", price: "$279", duration: "12 weeks" },
  ];

  return (
    <div className="mt-20 mx-auto w-full max-w-2xl rounded-none bg-black p-4 md:rounded-2xl md:p-8 text-white shadow-[0_0_10px_1px_rgba(13,148,136,0.2)]">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
        Course Enrollment
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        Fill out the form below to enroll in your selected course
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Personal Information</h3>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name *</Label>
              <Input id="firstname" type="text" required />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name *</Label>
              <Input id="lastname" type="text" required />
            </LabelInputContainer>
          </div>
          
          <LabelInputContainer>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" required />
          </LabelInputContainer>
          
          <LabelInputContainer>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" required />
          </LabelInputContainer>
        </div>

        {/* Course Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Course Selection</h3>
          <LabelInputContainer>
            <Label htmlFor="course">Select Course *</Label>
            <select 
              id="course"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              {courses.map((course) => (
                <option key={course.name} value={course.name}>
                  {course.name} - {course.price} ({course.duration})
                </option>
              ))}
            </select>
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="experience">Previous Music Experience</Label>
            <select 
              id="experience"
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="professional">Professional</option>
            </select>
          </LabelInputContainer>
        </div>

        {/* Payment Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Payment Information</h3>
          
          <div className="space-y-3">
            <Label>Payment Method *</Label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={paymentMethod === "credit-card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <span className="text-white">Credit/Debit Card</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <span className="text-white">PayPal</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="installments"
                  checked={paymentMethod === "installments"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <span className="text-white">Monthly Installments</span>
              </label>
            </div>
          </div>

          {paymentMethod === "credit-card" && (
            <div className="space-y-4">
              <LabelInputContainer>
                <Label htmlFor="cardnumber">Card Number *</Label>
                <Input id="cardnumber" placeholder="1234 5678 9012 3456" type="text" />
              </LabelInputContainer>
              <div className="flex space-x-4">
                <LabelInputContainer>
                  <Label htmlFor="expiry">Expiry Date *</Label>
                  <Input id="expiry" placeholder="MM/YY" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input id="cvv" placeholder="123" type="text" />
                </LabelInputContainer>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <LabelInputContainer>
          <Label htmlFor="message">Additional Comments (Optional)</Label>
          <textarea
            id="message"
            placeholder="Any specific goals or questions about the course?"
            className="flex min-h-[100px] w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </LabelInputContainer>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-1 text-blue-600"
            />
            <span className="text-sm text-neutral-300">
              I agree to the <span className="text-blue-400 underline">Terms and Conditions</span> and <span className="text-blue-400 underline">Privacy Policy</span> *
            </span>
          </label>
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 text-blue-600"
            />
            <span className="text-sm text-neutral-300">
              I would like to receive updates about new courses and promotions
            </span>
          </label>
        </div>

        <button
          className="text-white group/btn relative flex h-12 w-full items-center justify-center space-x-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-4 font-medium shadow-input hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          type="submit"
        >
          Complete Enrollment &rarr;
          <BottomGradient />
        </button>

        <p className="text-center text-sm text-neutral-400 mt-4">
          Secure payment processing. Your information is protected.
        </p>
      </form>
    </div>
  );
};

export default EnrollmentForm;
