// Minimal types for the libheif-js Emscripten factory (the package ships no
// top-level TypeScript bindings). Only the surface Dashboard.tsx uses.
declare module 'libheif-js/libheif-wasm/libheif-bundle.js' {
  export interface HeifImage {
    get_width(): number;
    get_height(): number;
    display(imageData: ImageData, callback: (data: ImageData | null) => void): void;
  }

  export interface HeifDecoder {
    decode(data: ArrayBuffer | Uint8Array): HeifImage[];
  }

  export interface LibheifModule {
    HeifDecoder: new () => HeifDecoder;
  }

  export type LibheifFactory = (options?: {
    locateFile?: (path: string, prefix: string) => string;
  }) => Promise<LibheifModule> | LibheifModule;

  const factory: LibheifFactory;
  export default factory;
}
