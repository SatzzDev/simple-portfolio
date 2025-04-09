import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaFileDownload } from "react-icons/fa";

export default function HeaderSection() {
  return (
    <motion.div
      className="w-full bg-background rounded-xl p-5 shadow-md border border-border"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <motion.h1 
            className="text-2xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Portfolio <span className="text-primary">Kurniawan Satria</span>
          </motion.h1>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Backend Developer
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <FaFileDownload />
            Download CV
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}