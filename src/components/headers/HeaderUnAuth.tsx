import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../theme/ThemeToggle'

const HeaderUnAuth = () => {
    const { pathname } = useLocation()

    const linkClasses = (path: string) => {
        const base = 'px-3 py-2 rounded transition text-sm font-medium'
        const active = 'bg-white text-gray-900 dark:bg-gray-700 dark:text-white shadow'
        const inactive =
            'text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700/70'
        return `${base} ${pathname === path ? active : inactive}`
    }

    return (
        <header className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2">
                <nav aria-label="authentication links" className="flex gap-2">
                    <Link to="/login" className={linkClasses('/login')}>
                        Connexion
                    </Link>
                    <Link to="/register" className={linkClasses('/register')}>
                        Inscription
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default HeaderUnAuth
