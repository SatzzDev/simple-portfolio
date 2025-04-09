import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Profile, SocialLink } from "@shared/schema";
import { SocialIcon } from "./LinksSection";

interface ProfileSectionProps {
  profile: Profile;
  socialLinks: SocialLink[];
}

export default function ProfileSection({ profile, socialLinks }: ProfileSectionProps) {
  return (
    <motion.div 
      className="flex flex-col items-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="avatar-glow transition-all duration-300 rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
          <Avatar className="w-24 h-24 md:w-28 md:h-28 border-2 border-white">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        {profile.status === "online" && (
          <div className="absolute -bottom-1 -right-1 bg-green-400 w-4 h-4 rounded-full border-2 border-white"></div>
        )}
      </motion.div>
      
      <motion.h1 
        className="text-2xl md:text-3xl font-bold text-neutral-800 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {profile.name}
      </motion.h1>
      
      <motion.p 
        className="text-neutral-700 text-center mt-2 max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {profile.bio}
      </motion.p>
      
      <motion.div 
        className="flex gap-3 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SocialIcon icon={social.icon} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
