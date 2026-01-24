import type { BaseArgs } from "../../../types.js";
import type { Signal } from "../serveur.types.js";

export interface PowerArgs extends BaseArgs {
  signal: Signal;
}
