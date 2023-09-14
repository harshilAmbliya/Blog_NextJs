"use client";

import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

export function Signup() {
  return (
    <Card color="transparent" shadow={false} className="h-screen flex items-center justify-center">
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" crossOrigin={undefined} />
          <Input
            type="password"
            size="lg"
            label="Password"
            crossOrigin={undefined}
          />
        </div>
        
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography  color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
