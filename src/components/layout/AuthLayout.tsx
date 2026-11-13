import {Outlet} from "react-router";
import AuthNavbar from "./AuthNavbar.tsx";
import {BriefcaseBusiness} from "lucide-react";

export default function AuthLayout() {
    return (
        <div className="bg-background h-screen">
            <AuthNavbar/>
            <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                    <div className="p-1.5 rounded-lg bg-primary text-primary-foreground mr-3">
                        <BriefcaseBusiness />
                    </div>
                    <h2 className="font-bold">Job Application Tracker</h2>
                </div>
                <Outlet />
            </div>
        </div>
    )
}