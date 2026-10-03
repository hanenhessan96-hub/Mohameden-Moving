/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E2A47',
          dark: '#0A1D33',
          light: '#163B63',
          subtle: '#1F4B7C',
        },
        brand: {
          primary: '#1D4ED8', // Coordinated corporate blue
          hover: '#1E40AF',   // Slightly darker blue for hover
          accent: '#2563EB',  // Bright action blue
          light: '#EFF6FF',   // Soft light blue background
          subtle: '#F0F7FF',  // Subtle tint
          border: '#DBEAFE',  // Soft blue border
        },
        surface: {
          offwhite: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#F1F5F9',
        },
        body: {
          dark: '#0F172A',    // Deep slate for headings
          text: '#334155',    // Reading text
          muted: '#64748B',   // Muted slate
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px -2px rgba(14, 42, 71, 0.05), 0 1px 4px -1px rgba(14, 42, 71, 0.03)',
        'card': '0 4px 20px -4px rgba(14, 42, 71, 0.08)',
        'floating': '0 10px 25px -5px rgba(29, 78, 216, 0.25)',
      }
    },
  },
  plugins: [],
}
