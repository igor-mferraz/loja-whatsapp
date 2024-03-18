import { CheckoutSteps } from "@/types/checkout-steps"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckOutStore } from "@/stores/checkout-store"
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
type Props = {
    setStep: Dispatch<SetStateAction<CheckoutSteps>>
}

const formSchema = z.object({
    name: z.string().min(2, "Preencha seu nome")
})

export const StepUser = ({setStep}:Props) => {

    const { name, setName } = useCheckOutStore(state => state)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name }
    })

    const onSubmit = (values : z.infer<typeof formSchema> )=> {
        setName(values.name)
        setStep("address")
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField 
                    control={form.control}
                    name="name"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Seu Nome</FormLabel>
                            <FormControl>
                                <Input 
                                    autoFocus
                                    placeholder="digite seu nome"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant='outline'>
                    Proximo
                </Button>
            </form>
        </Form>
    )
}