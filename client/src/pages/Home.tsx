import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import HeaderSection from "@/components/HeaderSection";
import ProfileSection from "@/components/ProfileSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import LinksSection from "@/components/LinksSection";
import ContactSection from "@/components/NewsletterSection";  // Component renamed but file is still the same
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
        className="w-full max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <>
            <HeaderSection />
            <div className="md:grid md:grid-cols-3 gap-4 mt-4">
              <div className="md:col-span-1">
                <ProfileSection 
                  profile={profile!} 
                  socialLinks={socialLinks!} 
                />
                <SkillsSection />
              </div>
              <div className="md:col-span-2">
                <ProjectsSection />
                <LinksSection links={links!} />
                <ContactSection />
              </div>
            </div>
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
      {/* Header skeleton */}
      <Skeleton className="w-full h-16 rounded-xl" />
      
      {/* Main content skeleton */}
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          {/* Profile skeleton */}
          <div className="bg-white p-5 rounded-xl">
            <div className="flex flex-col items-center">
              <Skeleton className="w-28 h-28 rounded-full mb-4" />
              <Skeleton className="h-7 w-36 mb-2" />
              <Skeleton className="h-4 w-full mb-4" />
              <div className="flex gap-3 justify-center w-full">
                {[1, 2, 3, 4].map(i => (
                  <Skeleton key={i} className="w-8 h-8 rounded-full" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills skeleton */}
          <div className="bg-white p-5 rounded-xl">
            <Skeleton className="h-7 w-24 mb-4" />
            <div className="space-y-4">
              {[1, 2, 3].map(category => (
                <div key={category} className="space-y-2">
                  <Skeleton className="h-5 w-32 mb-2" />
                  {[1, 2].map(skill => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-10" />
                      </div>
                      <Skeleton className="h-2 w-full rounded-full" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4 mt-4 md:mt-0">
          {/* Projects skeleton */}
          <div className="bg-white p-5 rounded-xl">
            <Skeleton className="h-7 w-48 mb-4" />
            <Skeleton className="h-10 w-full mb-6" />
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="h-40 w-full">
                  <Skeleton className="h-full w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Links skeleton */}
          <div className="space-y-3 w-full">
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="w-full h-20 rounded-xl" />
            ))}
          </div>
          
          {/* Contact skeleton */}
          <Skeleton className="w-full h-80 rounded-xl" />
        </div>
      </div>

      {/* Footer skeleton */}
      <div className="flex flex-col items-center mt-8">
        <Skeleton className="h-4 w-48 mb-2" />
        <Skeleton className="h-3 w-64 mb-2" />
        <div className="flex gap-2">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}
