import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
        <motion.h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-indigo-accent mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}>
        404
      </motion.h1>
      <motion.p className="text-lg sm:text-xl md:text-2xl text-charcoal mb-8 max-w-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}>
        Oops! The page you are looking for does not exist.
      </motion.p>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} whileHover={{ scale: 1.05 }}>
        <Link to="/" className="px-6 py-3 bg-indigo-accent text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-colors duration-300">
          Go Back Home
        </Link>
      </motion.div>

    </div>
  );
}
