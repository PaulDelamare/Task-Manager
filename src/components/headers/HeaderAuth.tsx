import { useAuth } from '../auth/authContext';

const HeaderAuth = () => {
    const { logout } = useAuth();

    return (
        <header className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2">
                <nav aria-label="authentication links" className="flex gap-2">
                    <button
                        type="button"
                        onClick={logout}
                        className="px-3 py-2 rounded transition text-sm font-medium bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                    >
                        Logout
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderAuth
