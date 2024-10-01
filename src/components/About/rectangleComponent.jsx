    import { motion } from "framer-motion"

    const Rectangle = ({ heading, subHeading }) => {
    return (
        <motion.div 
        className="w-full h-28 sm:h-36 md:h-30 border-2 border-primary bg-transparent p-3 sm:p-4 flex flex-col items-start justify-start
            hover:border-secondary transition-colors duration-300 ease-in-out rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
        aria-labelledby="rectangle-title"
        >
        <motion.h2
            id="rectangle-title"
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
        >
            {heading}
        </motion.h2>
        <motion.p
            className="text-xs sm:text-sm md:text-base text-blue-600 mt-1 sm:mt-2"
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
        >
            {subHeading}
        </motion.p>
        </motion.div>
    )
    }
    export default Rectangle    