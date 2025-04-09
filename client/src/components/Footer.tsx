import { motion } from "framer-motion";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="mt-8 text-center text-neutral-700 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
    >
      <p>© {currentYear} {name}. Hak Cipta Dilindungi.</p>
      <div className="mt-2">
        <span className="text-neutral-500">Dibuat dengan ♥ menggunakan React + TypeScript</span>
      </div>
      <div className="mt-2">
        <a href="#" className="text-primary hover:underline">Kebijakan Privasi</a> · 
        <a href="#" className="text-primary hover:underline">Ketentuan Layanan</a>
      </div>
    </motion.footer>
  );
}
