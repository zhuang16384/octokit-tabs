import { useState } from 'preact/hooks';
import { Button } from '@/components/ui/button';
import './style.css';

export function App() {
    const [count, setCount] = useState(0);

    return (
        <div class="space-y-4 p-8">
            <div class="flex items-center justify-center gap-4">
                <a href="https://wxt.dev" target="_blank" rel="noreferrer">
                    <img src="/wxt.svg" class="h-16 w-16" alt="WXT logo" />
                </a>
                <a href="https://preactjs.com" target="_blank" rel="noreferrer">
                    <img src="/preact.svg" class="h-16 w-16" alt="Preact logo" />
                </a>
            </div>
            <h1 class="text-3xl font-bold">WXT + Preact + Tailwind</h1>
            <div class="card space-y-2">
                <Button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </Button>
                <p class="text-muted-foreground">
                    Edit <code>entrypoints/popup/App.tsx</code> and save to test HMR
                </p>
            </div>
        </div>
    );
}
