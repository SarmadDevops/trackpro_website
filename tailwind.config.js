/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#1CA0E8",
          orangeDark: "#1580C0",
          ink: "#0B0B0C",
          coal: "#141416",
          smoke: "#1E1F22",
          cloud: "#F4F5F6",
          mist: "#E9EBEE",
        },
      },
      fontFamily: {
        display: ['"Onest"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        body: ['"Onest"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
}
