import { AppProps } from "$fresh/server.ts";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
export default function App({ Component }: AppProps) {
  return (
    <body class="bg-gray-100 min-h-screen flex flex-col">
      <div class="px-4 pt-8 mx-auto w-full max-w-screen-md flex-1">
        <Component />
      </div>
      <div class="bg-gray-800 mt-24 py-8 text-white text-center flex justify-center items-center gap-2">
        <div>
          Playdate Texture Editor
        </div>
        <a
          href="https://github.com/jessiejs/playdate-texture-editor"
          class="inline-block text-white hover:text-gray-400"
        >
          <BrandGithub />
        </a>
      </div>
    </body>
  );
}
