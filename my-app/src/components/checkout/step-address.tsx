import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckOutStore } from "@/stores/checkout-store"
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

const formSchema = z.object({
    street: z.string().min(2, "Preencha a rua"),
    number: z.string().min(2, "Preencha o numero"),
    complement: z.string().optional(),
    district: z.string().min(2, "Preencha o bairro"),
    city: z.string().min(2, "Preencha a cidade"),
    state: z.string().min(2, "Preencha o estado"),
})

export const StepAddress = ({setStep}:Props) => {

    const { address, setAddress } = useCheckOutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            ...address
        }
    })

    const onSubmit = (values : z.infer<typeof formSchema> )=> {
        setAddress(values)
        setStep("finish")
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <FormField 
                        control={form.control}
                        name="street"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Rua</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="number"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Numero</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="complement"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Complemento</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="district"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Bairro</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="city"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Cidade</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="state"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel>Estado</FormLabel>
                                <FormControl>
                                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger>
                                            <SelectValue placeholder='Estado'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pr">
                                                Paraná
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-between mt-4">
                    <Button onClick={()=>setStep('user')} variant='link'>
                        Voltar
                    </Button>
                    <Button type="submit">
                        Concluir
                    </Button>
                </div>
            </form>
        </Form>
    )
}