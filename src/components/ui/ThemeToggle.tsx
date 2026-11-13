import { Sun } from 'lucide-react';

export default function ThemeToggle() {
    return (
      <button className="
        rounded-md p-2.5
        bg-secondary text-secondary-foreground
        hover:text-secondary-foreground-hover hover:bg-secondary-hover">
          <Sun className="h-5 w-5"/>
      </button>
    );
}