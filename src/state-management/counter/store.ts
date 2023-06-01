import {create} from 'zustand'


interface CounterStore {
    count: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
    count: 0,
    increment: () => set(store => ({ count: store.count + 1 })),
    reset: () => set(() => ({ count: 0}))
}))

export default useCounterStore;