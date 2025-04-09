import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { insertSubscriberSchema } from "@shared/schema";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

const formSchema = z.object({
  email: z.string().email({ message: "Masukkan alamat email yang valid" }),
  name: z.string().min(2, { message: "Nama minimal 2 karakter" }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: ""
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      // Untuk demo, kita tetap gunakan API subscribe yang ada
      const res = await apiRequest("POST", "/api/subscribe", { email: values.email });
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Berhasil!",
        description: "Terima kasih telah menghubungi saya! Saya akan segera membalas pesan Anda.",
      });
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Terjadi kesalahan",
        description: error instanceof Error ? error.message : "Gagal mengirim pesan. Silahkan coba lagi.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: FormValues) {
    mutation.mutate(values);
  }

  return (
    <motion.div 
      className="mt-8 bg-white p-5 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-neutral-800 mb-4">Hubungi Saya</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-neutral-700 mb-4">
            Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
          
          <div className="space-y-3 mt-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <FaEnvelope />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Email</p>
                <p className="text-neutral-600 text-sm">email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <FaPhone />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Telepon</p>
                <p className="text-neutral-600 text-sm">+62 812 3456 7890</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <FaMapMarker />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Lokasi</p>
                <p className="text-neutral-600 text-sm">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          {isSubmitted ? (
            <motion.div 
              className="bg-green-50 text-green-700 p-5 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium">Terima kasih atas pesan Anda!</p>
              <p className="text-sm mt-2">Saya akan menghubungi Anda segera melalui email yang Anda berikan.</p>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Masukkan nama Anda" 
                          className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="email@example.com" 
                          type="email"
                          className="px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Ceritakan lebih detail tentang proyek atau pertanyaan Anda..."
                          className="min-h-[120px] px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {mutation.isPending ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
