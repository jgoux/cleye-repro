import { command } from "cleye";

export const projectCreateCommand = command(
  {
    name: "create",
    parameters: ["<project name>"],
  },
  (argv) => {
    console.log(`Project ${argv._.projectName} created`);
  }
);