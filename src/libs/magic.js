import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";

export const magic = new Magic(
  'pk_live_23FAB668E21A795B',
  {
    extensions: [new OpenIdExtension()],
  }
);
