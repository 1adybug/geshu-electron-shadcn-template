import config from "@1adybug/eslint"

export default [
    {
        ignores: ["components/ui/**", "dist/**", "dist-electron/**", "utils/shadcn.ts"],
    },
    ...config,
    {
        files: ["electron/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}"],
        rules: {
            "prefer-arrow-callback": "off",
        },
    },
]
