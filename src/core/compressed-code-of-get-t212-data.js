import { getData, getInstruction } from "./get-t212-data.js";

export const getCompressedCodeofGetData = async () => {
  let rawCode;
  const rawCodeRaw = getData.toString();

  try {
    const terserResult = await Terser.minify(rawCodeRaw, {
      compress: {
        passes: 10,
        unsafe: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        pure_getters: true,
        drop_debugger: true,
        dead_code: true,
        collapse_vars: true,
        reduce_vars: true,
        inline: 3,
        hoist_funs: true,
        hoist_vars: true,
        booleans_as_integers: true,
        evaluate: true,
        loops: true,
        if_return: true,
        join_vars: true,
        sequences: true,
        negate_iife: true,
        keep_infinity: false,
        typeofs: true,
        side_effects: true,
      },
      mangle: {
        toplevel: true,
        eval: true,
      },
      format: {
        comments: false,
        ascii_only: true,
        semicolons: false,
        beautify: false,
      },
    });

    rawCode = terserResult.code ?? rawCodeRaw;
  } catch (e) {
    console.warn("Terser minification failed, using raw code:", e);
    rawCode = rawCodeRaw;
  }
  return rawCode;
};
