"use client";

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import { CogIcon, HomeIcon, Phone, SquareCodeIcon } from "lucide-react";

export function WhatsappMenu() {
  return (
    <div className="fixed bottom-5 right-5  ">
      <SpeedDial className="">
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-full">
            <Phone className="h-5 w-5 transition-transform group-hover:rotate-[360deg]" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent>
          <SpeedDialAction>
            <HomeIcon className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction>
            <CogIcon className="h-5 w-5" />
          </SpeedDialAction>
          <SpeedDialAction>
            <SquareCodeIcon className="h-5 w-5" />
          </SpeedDialAction>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
