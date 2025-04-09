import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import type { Link } from "@shared/schema";
import { 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaTiktok,
  FaPinterest,
  FaReddit,
  FaTwitch,
  FaDiscord,
  FaSnapchat,
  FaSpotify,
  FaWhatsapp,
  FaTelegram,
  FaSlack,
  FaDribbble,
  FaBehance,
  FaMedium,
  FaPatreon,
  FaShoppingBag, 
  FaPodcast, 
  FaBook, 
  FaCalendarAlt, 
  FaBlog, 
  FaLink, 
  FaEnvelope, 
  FaPhone,
  FaMapMarker,
  FaChevronRight
} from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";

export function SocialIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    instagram: <FaInstagram />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedinIn />,
    youtube: <FaYoutube />,
    github: <FaGithub />,
    facebook: <FaFacebook />,
    tiktok: <FaTiktok />,
    pinterest: <FaPinterest />,
    reddit: <FaReddit />,
    twitch: <FaTwitch />,
    discord: <FaDiscord />,
    snapchat: <FaSnapchat />,
    spotify: <FaSpotify />,
    whatsapp: <FaWhatsapp />,
    telegram: <FaTelegram />,
    slack: <FaSlack />,
    dribbble: <FaDribbble />,
    behance: <FaBehance />,
    medium: <FaMedium />,
    patreon: <FaPatreon />,
    store: <FaShoppingBag />,
    podcast: <FaPodcast />,
    book: <FaBook />,
    calendar: <FaCalendarAlt />,
    blog: <FaBlog />,
    link: <FaLink />,
    email: <FaEnvelope />,
    location: <FaMapMarker />,
    phone: <FaPhone />,
    // Add more icons as needed
  };

  return iconMap[icon] || <BsLink45Deg />;
}

interface LinksSectionProps {
  links: Link[];
}

export default function LinksSection({ links }: LinksSectionProps) {
  const { toast } = useToast();
  
  const trackLinkClick = (link: Link) => {
    // In a real app this would send data to an analytics service
    console.log('Link clicked:', link.title);
    
    // Show a toast notification
    toast({
      title: `Visiting ${link.title}`,
      description: "Opening link in a new tab",
      duration: 2000,
    });
  };

  return (
    <motion.div 
      className="space-y-3 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {links.sort((a, b) => a.order - b.order).map((link, index) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-card group block w-full bg-background rounded-xl p-4 shadow-md border border-border hover:shadow-lg transition-all"
          onClick={() => trackLinkClick(link)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
          whileHover={{ y: -3, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center text-primary-foreground">
              <SocialIcon icon={link.icon} />
            </div>
            <div className="flex-grow">
              <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              <FaChevronRight />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}