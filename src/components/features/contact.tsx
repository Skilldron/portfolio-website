import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input, TextArea } from "../ui/input";
import { cn } from "@/lib/utils";
import { Calendar, LocateIcon, PhoneIcon, SendIcon } from "lucide-react";
import CalendarFloatingButton, { BookingButton } from "./calendar_button";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

export default function Contact() {
  const bookingRef = useRef(null);
  const bookingInView = useInView(bookingRef, { margin: "50px 0px 0px 0px" });
  const form = useRef(null);
  const { toast } = useToast();

  const handleMailTo = (formData: FormData) => {
    const email = "harold.delory@gmail.com";
    const subject = encodeURIComponent("Prise de contact");
    const userEmail = encodeURIComponent(
      (formData.get("from_name") as string) || ""
    );
    const userMessage = encodeURIComponent(
      (formData.get("message") as string) || ""
    );

    const body = encodeURIComponent(
      `Bonjour,\n\nJe voulais vous contacter via le formulaire de votre site, mais j'ai rencontré un problème.\n\nInformations fournies :\n\n- Email : ${userEmail}\n\n- Message :\n${userMessage}`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const email = formData.get("from_name") as string;
    const fullName = formData.get("full_name") as string;

    if (!email.trim() || !fullName.trim()) {
      toast({
        title: "Les champs Adresse email et Nom complet sont obligatoires",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .sendForm("service_q4uhixt", "template_pvswz4h", form.current, {
        publicKey: "0SKSWPqYz3ChEaGEB",
      })
      .then(
        () => {
          toast({
            title: "Votre e-mail a été envoyé avec succès, à bientôt !",
            variant: "success",
          });
        },
        () => {
          toast({
            title: "Oups !",
            description: "Une erreur est survenue lors de l’envoi.",
            action: (
              <ToastAction
                altText="Autre méthode"
                onClick={() => handleMailTo(formData)}
              >
                Envoyer un message
              </ToastAction>
            ),
            variant: "destructive",
          });
        }
      );
  };

  return (
    <div>
      {!bookingInView ? <CalendarFloatingButton /> : <></>}
      <div className="mb-10">
        <div className="w-full relative max-w-[80%] xl:max-w-7xl mx-auto">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary to-secondary transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl dark:bg-[#201E1F] bg-outlet border px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="w-full px-10 flex flex-col lg:flex-row gap-10 lg:gap-32">
              <div className="w-full xl:w-1/3 flex flex-col gap-5">
                <h2 className="pb-10">Contactez moi !</h2>

                <div className="pb-5 flex flex-col md:flex-row gap-5 md:gap-10 lg:block">
                  <div className="flex flew-row gap-3">
                    <PhoneIcon /> <p>06 89 45 97 94</p>
                  </div>
                  <div className="flex flew-row gap-3">
                    <LocateIcon /> <p>France, Lens</p>
                  </div>
                </div>
                <h3 className="pb-1">Vous pouvez aussi...</h3>
                <BookingButton ref={bookingRef}>
                  <span className="flex justify-center text-button-foreground text-sm xl:text-xl gap-3">
                    <Calendar /> Booker un RDV
                  </span>
                  <BottomGradient />
                </BookingButton>
              </div>
              <form ref={form} className="my-8 w-full" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="youremail">Votre adresse email *</Label>
                  <Input
                    id="youremail"
                    placeholder="contactons@nous.com"
                    type="email"
                    name="from_name"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                  <Label htmlFor="fullname">Nom complet *</Label>
                  <Input
                    id="fullname"
                    placeholder="Joe foo"
                    name="full_name"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="enterprise">Entreprise</Label>
                  <Input
                    id="enterprise"
                    placeholder="MyCompany"
                    name="company"
                    type="text"
                  />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                  <Label htmlFor="notes">Notes</Label>
                  <TextArea
                    id="notes"
                    placeholder="Indiquez toutes autres informations.."
                    name="message"
                  />
                </LabelInputContainer>

                <button
                  className="bg-gradient-to-br relative group/btn bg-button w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                >
                  <span className="flex justify-center gap-3">
                    Envoyer <SendIcon />
                  </span>
                  <BottomGradient />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
