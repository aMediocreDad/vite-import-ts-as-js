import { defineConfig } from "vite";
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
	build: {
		rollupOptions: {
			plugins: [nodeResolve()],
		},
	},
});
