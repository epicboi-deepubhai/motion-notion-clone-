"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignUpButton } from "@clerk/clerk-react";

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
    return (
      <div className="max-w-3xl space-y-6 md:pl-6 lg:pl-10">
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-centre md:text-left ">
          Your Ideas, Documents, & plans, Unified, welcome to{" "}
          <span className="underline">Motion</span>
        </h1>
        <h3 className="text-xl sm:text-xl md:text-2xl font-medium text-center md:text-left">
          Motion is the connected workspace where <br />
          better, faster work happens
        </h3>
        <div className="w-full flex items-center justify-center md:justify-normal md:items-left">
        {isLoading && (
            <Spinner size={"lg"} />
        )}
        {isAuthenticated && !isLoading && (
          <>
          <Button asChild size="lg">
            <Link href="/documents">
              Enter Motion <ArrowRight className="h-6 w-6 ml-2" />
            </Link>
          </Button>
          </>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignUpButton mode="modal">
              <Button size={"lg"}>
                Get Started! <ArrowRight className="h-6 w-6 ml-2" />
              </Button>
            </SignUpButton>
          </>
        )}
        </div>
      </div>
    );
};
