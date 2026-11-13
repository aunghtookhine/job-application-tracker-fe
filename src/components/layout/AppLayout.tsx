import {Outlet} from "react-router";

export default function AppLayout() {
    return (
        <div className="border p-4">
            This is AppLayout.
            <Outlet />
        </div>
    );
}