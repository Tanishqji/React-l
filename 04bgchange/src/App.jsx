import { useState } from "react"

function App() {
  const [color, setColor] = useState('#212121')

  return (
    <div className="w-full h-screen transition-all duration-700 ease-in-out flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="absolute top-20 text-white text-center">
        <h1 className="text-6xl font-black tracking-tighter drop-shadow-2xl mb-2">
          BACKGROUND <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">CHANGER</span>
        </h1>
        <p className="text-white/60 font-medium tracking-widest uppercase text-sm">Select a palette to transform your view</p>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 animate-bounce-subtle">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-full">
          {[
            { name: "Red", value: "#ef4444" },
            { name: "Green", value: "#22c55e" },
            { name: "Blue", value: "#3b82f6" },
            { name: "Olive", value: "#808000" },
            { name: "Gray", value: "#6b7280" },
            { name: "Yellow", value: "#eab308" },
            { name: "Pink", value: "#ec4899" },
            { name: "Purple", value: "#a855f7" },
            { name: "Lavender", value: "#e9d5ff", textColor: "black" },
            { name: "White", value: "#ffffff", textColor: "black" },
            { name: "Black", value: "#000000" },
          ].map((item) => (
            <button
              key={item.value}
              onClick={() => setColor(item.value)}
              className="outline-none px-5 py-2 rounded-full text-white shadow-lg transition-transform hover:scale-110 active:scale-95 font-semibold text-sm"
              style={{ backgroundColor: item.value, color: item.textColor || 'white' }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App