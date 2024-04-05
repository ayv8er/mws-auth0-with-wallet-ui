import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";

export const magic = new Magic(
  'pk_live_CBE04864892D2CA8',
  {
    extensions: [new OpenIdExtension()],
  }
);
