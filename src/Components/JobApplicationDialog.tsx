"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { GradientBorderButton } from "@/Components/ui/gradient-border-button";
import { Check, Loader2 } from "lucide-react";

interface JobApplicationDialogProps {
  jobTitle: string;
  jobCompany: string;
  jobId: number;
}

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  resume: FileList;
  coverLetter: string;
};

export function JobApplicationDialog({ jobTitle, jobCompany, jobId }: JobApplicationDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Application submitted:', {
        jobId,
        jobTitle,
        jobCompany,
        candidateInfo: data
      });
      
      setIsSubmitted(true);
      reset();
      
      // Close dialog after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setOpen(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <GradientBorderButton className="text-sm py-1.5 px-5">
          Apply
        </GradientBorderButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-[#0D1320] to-[#111a2c] border-blue-900/30 text-white">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-white text-xl">Apply for {jobTitle}</DialogTitle>
              <DialogDescription className="text-gray-300">
                Submit your application for {jobTitle} at {jobCompany}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white">Full Name</Label>
                  <Input
                    id="fullName"
                    className="bg-[#101625]/70 border-blue-900/30 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                    placeholder="Enter your full name"
                    {...register("fullName", { required: "Full name is required" })}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-[#101625]/70 border-blue-900/30 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                      placeholder="Your email address"
                      {...register("email", { 
                        required: "Email is required", 
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input
                      id="phone"
                      className="bg-[#101625]/70 border-blue-900/30 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                      placeholder="Your phone number"
                      {...register("phone", { required: "Phone number is required" })}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">Years of Experience</Label>
                  <Input
                    id="experience"
                    type="number"
                    className="bg-[#101625]/70 border-blue-900/30 text-white placeholder:text-gray-500 focus-visible:ring-blue-500"
                    placeholder="Years of relevant experience"
                    {...register("experience", { required: "Experience is required" })}
                  />
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-white">Resume</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="bg-[#101625]/70 border-blue-900/30 text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-2 file:py-1 file:mr-2 hover:file:bg-blue-700 cursor-pointer"
                    {...register("resume", { required: "Resume is required" })}
                  />
                  {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-white">Cover Letter (optional)</Label>
                  <Textarea
                    id="coverLetter"
                    className="bg-[#101625]/70 border-blue-900/30 text-white placeholder:text-gray-500 focus-visible:ring-blue-500 min-h-[100px]"
                    placeholder="Tell us why you're interested in this position..."
                    {...register("coverLetter")}
                  />
                </div>
              </div>
              
              <DialogFooter className="mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  className="border-blue-900/30 text-gray-300 hover:bg-blue-900/10 hover:text-white"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white">Application Submitted!</h3>
            <p className="text-gray-300 text-center mt-2 mb-6">
              Your application for {jobTitle} at {jobCompany} has been successfully submitted.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 