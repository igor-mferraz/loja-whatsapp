import { create } from "zustand";

type States = {
    name: string;
    address: {
        street: string;
        number: string;
        complement?:string | undefined;
        district: string;
        city:string;
        state:string;
    }
}
type Actions = {
    setName: (name: States['name']) => void;
    setAddress: (address :States['address']) => void;
}

const initialState: States = {
    name: '',
    address: {
        street:'',
        state:'',
        city: '',
        district: '',
        number:'',
        complement: ''
    }
}

export const useCheckOutStore = create<States & Actions>()(set => ({
    ...initialState,
    setName: (name) => set(state => ({ ...state, name: name})),
    setAddress: (address) => set(state => ({...state, address: address}))
}))