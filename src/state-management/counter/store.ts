import { create } from 'zustand'
import { mountStoreDevtool} from 'simple-zustand-devtools'


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

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('coCounter Store', useCounterStore)
}

export default useCounterStore;