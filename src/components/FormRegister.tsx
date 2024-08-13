"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import Logo from "@/assets/LogoCtrlDev-Bordered.svg";

import confetti from "canvas-confetti";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Usuario no valido",
  }),
  lastname: z.string().min(2, {
    message: "Apellido no valido",
  }),
  email: z.string().email({
    message: "Dirección de correo electrónico no válida",
  }),
  questions: z.optional(z.string()),
  social_media: z.string().min(1, {
    message: "Selecciona una opción",
  }),
});

function FormRegister() {
  // Confetti function
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#3a0467", "#bf81ff", "#f0b081", "#722a1c"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      lastname: "",
      email: "",
      questions: "",
      social_media: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(JSON.stringify(data, null, 2));
    handleClick();
  }

  return (
    <div className="w-full flex justify-around items-center px-6 my-4">
      <div className="flex items-end min-h-96 ">
        <div className="flex items-center justify-center w-80 h-80 bg-foreground rounded-full animate-bounce">
          <img src={Logo} className="" alt="Logo CtrlDev" />
        </div>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 bg-foreground/5 max-w-2xl rounded-md p-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Carlos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Loza Perez" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="juan_perez123@email.net" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="social_media"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donde te enteraste del Grupo de estudio</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="---" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="presentacion">
                        Presentación de grupos de estudio
                      </SelectItem>
                      <SelectItem value="redes">
                        Facebook, Instagram o Tiktok
                      </SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="questions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preguntas</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Escribe tus preguntas aquí"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Si tienes alguna pregunta, no dudes en escribirla aquí.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button onClick={handleClick} type="submit">
                Enviar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default FormRegister;
