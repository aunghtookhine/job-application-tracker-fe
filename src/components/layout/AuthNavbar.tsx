import ThemeToggle from "../ui/ThemeToggle.tsx";

export default function AuthNavbar() {
    return (
      <header className="p-3 flex justify-end items-center w-full">
          <ThemeToggle />
      </header>
    );
}