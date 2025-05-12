"use client"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-6 py-16 bg-cover bg-center transition-colors duration-300"
      style={{ backgroundImage: "url('/img1.png')" }} 
    >
      <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/40 backdrop-blur-xs" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-blue-100 dark:text-blue-200">
        <h1 className="text-4xl md:text-6xl font-bold">
        Unlock the Value of Unused Software with <span className="text-blue-300 dark:text-blue-400">SoftSell</span>
        </h1>
        <p className="mt-6 text-lg text-white dark:text-gray-300 font-semibold">
        SoftSell helps businesses recover value from unused software licenses. Our secure marketplace connects sellers with verified buyers for a seamless transaction.</p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a
            href="#learn-more"
            className="border-2 border-blue-300 hover:text-blue-600 dark:hover:text-blue-700 text-blue-200 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-200 font-medium py-3 px-6 rounded-lg transition"
          >
            Get a Quote
          </a>
          <a
            href="#learn-more"
            className="border-2 border-blue-300 hover:text-blue-600 dark:hover:text-blue-700 text-blue-200 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-200 font-medium py-3 px-6 rounded-lg transition"
          >
           Sell My Licenses
          </a>
          <a
            href="#"
            className="border-2 border-blue-300 hover:text-blue-600 dark:hover:text-blue-700 text-blue-200 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-200 font-medium py-3 px-6 rounded-lg transition"
          >
            Request Valuation
          </a>
         
        </div>
      </div>
    </section>
  )
}
