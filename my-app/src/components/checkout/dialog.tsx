'use client'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { StepUser } from "./step-user";
import { StepAddress } from "./step-address";
import { StepFinish } from "./step-finish";

type Props = {
    open: boolean;
    onOpenChange: (open:boolean) => void
}

type Steps = 'user' | 'address' | 'finish'

export const ChecOutDialog = ({ open, onOpenChange }:Props) => {

    const [step, setStep] = useState<Steps>('user');
    let progress = 0;
    
    switch(step) {
        case 'user': progress = 30; break;
        case 'address': progress = 70; break;
        case 'finish': progress = 100; break;
    }

    return(
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        { step === 'user' && 'Dados Pessoais' }
                        { step === 'address' && 'Endereço' }
                        { step === 'finish' && 'Concluir Pedido' }
                    </DialogTitle>
                </DialogHeader>
            <Progress value={progress}/>
            <div className="flex flex-col gap-3">
                {
                    step === 'user' &&
                    <StepUser setStep={setStep}/>
                }
                {
                    step === 'address' &&
                    <StepAddress setStep={setStep}/>
                }
                {
                    step === 'finish' &&
                    <StepFinish/>
                }
            </div>

            </DialogContent>
        </Dialog>
    )
};