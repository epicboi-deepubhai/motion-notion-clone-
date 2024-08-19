"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { imageOptimizer } from "next/dist/server/image-optimizer";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { SignUpButton } from "@clerk/clerk-react";

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
    return (
      <div className="max-w-2xl space-y-4">
        <h1 className="text-2xl sm:text-4xl md:text-4xl font-bold">
          Your Ideas, Documents, & plans, Unified, welcome to{" "}
          <span className="underline">Jotion</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-xl font-medium">
          Jotion is the connected workspace where <br />
          better, faster work happens
        </h3>
        {isLoading&&(
          <div className="w-full flex justify-center items-center">
            <Spinner size={"lg"}/>
          </div>
        )}
        {isAuthenticated&&!isLoading&&(
          <>
          <Button asChild>
            <Link href="/documents">
              Enter Jotion <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
          </>
        )}
        {!isAuthenticated&&!isLoading&&(
          <>
            <SignUpButton mode="modal">
              <Button>
              Get Started! <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignUpButton>
          </>
        )}

      </div>
    );
  };