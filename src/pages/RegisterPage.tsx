import {Link} from "react-router";

export default function RegisterPage() {
    return (
        <div className="flex flex-col w-2/6 bg-white border mt-10 p-8 rounded-md border-gray-200 shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Create your account</h1>
            <p className="text-secondary-foreground">Start organizing your job search today.</p>
            <form className="flex flex-col my-5">
                <label htmlFor="fullName" className="mb-1">Full name <span className="text-red-600">*</span></label>
                <input type="text" id="fullName" placeholder="Your name" className="border p-2 border-gray-300 rounded-md mb-3" />
                <label htmlFor="email" className="mb-1">Email address <span className="text-red-600">*</span></label>
                <input type="text" id="email" placeholder="you@example.com" className="border p-2 border-gray-300 rounded-md mb-3" />
                <label htmlFor="password" className="mb-1">Password <span className="text-red-600">*</span></label>
                <input type="password" id="password" placeholder="Enter your password" className="border p-2 border-gray-300 rounded-md mb-5" />
                <button type="submit" className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-hover hover:cursor-pointer">Create account</button>
            </form>
            <p className="text-secondary-foreground text-center">Already have an account? <Link to="/login" className="text-primary">Sign in</Link></p>
        </div>
    )
}