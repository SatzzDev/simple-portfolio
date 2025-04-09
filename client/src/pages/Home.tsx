import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import ProfileSection from "@/components/ProfileSection";
import LinksSection from "@/components/LinksSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import type { Profile, SocialLink, Link } from "@shared/schema";

export default function Home() {
  const { data: profile, isLoading: isProfileLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const { data: socialLinks, isLoading: isSocialLinksLoading } = useQuery<SocialLink[]>({
    queryKey: ["/api/social-links"],
  });

  const { data: links, isLoading: isLinksLoading } = useQuery<Link[]>({
    queryKey: ["/api/links"],
  });

  const isLoading = isProfileLoading || isSocialLinksLoading || isLinksLoading;

  return (
    <motion.div 
      className="font-sans bg-gradient-to-br from-neutral-100 to-neutral-200 min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-full max-w-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <ProfileSection 
              profile={profile!} 
              socialLinks={socialLinks!} 
            />
            <LinksSection links={links!} />
            <NewsletterSection />
            <Footer name={profile!.name} />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="w-full space-y-8">
      {/* Profile skeleton */}
      <div className="flex flex-col items-center mb-8">
        <Skeleton className="w-28 h-28 rounded-full mb-4" />
        <Skeleton className="h-7 w-48 mb-2" />
        <Skeleton className="h-4 w-64 mb-4" />
        <div className="flex gap-3">
          {[1, 2, 3, 4].map(i => (
            <Skeleton key={i} className="w-8 h-8 rounded-full" />
          ))}
        </div>
      </div>

      {/* Links skeleton */}
      <div className="space-y-3 w-full">
        {[1, 2, 3, 4, 5].map(i => (
          <Skeleton key={i} className="w-full h-20 rounded-xl" />
        ))}
      </div>

      {/* Newsletter skeleton */}
      <Skeleton className="w-full h-40 rounded-xl" />

      {/* Footer skeleton */}
      <div className="flex flex-col items-center mt-8">
        <Skeleton className="h-4 w-48 mb-2" />
        <div className="flex gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}
