import {Link} from "react-router";

export default function LoginPage() {
    return (
        <div className="flex flex-col w-2/6 bg-white border mt-10 p-8 rounded-md border-gray-200 shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
            <p className="text-secondary-foreground">Sign in to continue tracking your applications.</p>
            <form className="flex flex-col my-5">
                <label htmlFor="email" className="mb-1">Email address <span className="text-red-600">*</span></label>
                <input type="text" id="email" placeholder="you@example.com" className="border p-2 border-gray-300 rounded-md mb-3" />
                <label htmlFor="password" className="mb-1">Password <span className="text-red-600">*</span></label>
                <input type="password" id="password" placeholder="Enter your password" className="border p-2 border-gray-300 rounded-md mb-5" />
                <button type="submit" className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover hover:cursor-pointer">Sign in</button>
            </form>
            <p className="text-secondary-foreground text-center">Don't have an account? <Link to="/register" className="text-primary">Register</Link></p>
        </div>
    )
}