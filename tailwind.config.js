/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enables dark mode using the 'class' strategy
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      screens: {
        es: "425px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1300px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      extend: {
        padding: {
          "sec-sm": 40,
          "sec-md": 80,
          "sec-lg": 112,
        },
        colors: {
          primary: {
            10: "var(--color-primary-10, #8EB5FF)",
            20: "var(--color-primary-20, #70A1FF)",
            30: "var(--color-primary-30, #518DFF)",
            40: "var(--color-primary-40, #3379FF)",
            50: "var(--color-primary-50, #1465FF)",
            60: "var(--color-primary-60, #1059E4)",
          },
          secondary: {
            10: "var(--color-secondary-10, #FFE2A2)",
            20: "var(--color-secondary-20, #FFD77F)",
            30: "var(--color-secondary-30, #FFCB5B)",
            40: "var(--color-secondary-40, #FFC038)",
            50: "var(--color-secondary-50, #FFB514)",
            60: "var(--color-secondary-60, #DF9E10)",
          },
          gray: {
            10: "var(--color-gray-10, #F4F4F5)",
            20: "var(--color-gray-20, #E4E4E7)",
            30: "var(--color-gray-30, #D4D4D8)",
            40: "var(--color-gray-40, #A1A1AA)",
            50: "var(--color-gray-50, #71717A)",
            60: "var(--color-gray-60, #52525B)",
            70: "var(--color-gray-70, #3F3F46)",
            80: "var(--color-gray-80, #27272A)",
            90: "var(--color-gray-90, #18181B)",
          },
          background: "var(--bg-color, #ffffff)",
          text: "var(--text-color, #000000)",
        },
        fontSize: {
          h1: [
            "clamp(2.25rem, 4vw, 3.75rem)",
            {
              lineHeight: "normal",
              fontWeight: "700",
            },
          ],
          h2: [
            "clamp(2rem, 4vw, 3rem)",
            {
              lineHeight: "normal",
              fontWeight: "700",
            },
          ],
          h3: [
            "clamp(1.75rem, 4vw, 2.25rem)",
            {
              lineHeight: "normal",
              fontWeight: "700",
            },
          ],
          "3xlg": ["clamp(1.5rem, 4vw, 2rem)"],
          "2xlg": ["clamp(1.25rem, 4vw, 1.5rem)"],
        },
        transitionDuration: {
          DEFAULT: "300ms",
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  