'use client'

export default function LinkedInLink({ className }: { className?: string }) {
    function handleClick() {
        fetch('/api/notify-social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                platform: 'Projects',
                pageUrl: window.location.href,
                userAgent: navigator.userAgent,
            }),
        }).catch(() => { })
    }

    return (
        <a
            href="/collections"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Projects"
            onClick={handleClick}
            className={className}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.53 4.61a8.44 8.44 0 0 1 1.91 5.06c-1.95-.4-3.77-.48-5.45-.25-.25-.61-.53-1.22-.83-1.82 1.5-.66 2.95-1.56 4.37-2.99ZM12 3.55c2.1 0 4.02.77 5.5 2.05-1.25 1.23-2.56 2.04-4.05 2.64a37.66 37.66 0 0 0-2.96-4.53c.49-.1 1-.16 1.51-.16Zm-3.23.74a34.73 34.73 0 0 1 3.05 4.49c-2.23.6-4.78.7-7.73.7a8.5 8.5 0 0 1 4.68-5.19ZM3.55 12c0-.28.01-.55.04-.82 3.42.02 6.36-.1 9.02-.92.24.49.47.99.69 1.49-3.28.96-5.79 2.94-7.48 5.87A8.4 8.4 0 0 1 3.55 12Zm8.45 8.45a8.4 8.4 0 0 1-4.82-1.52c1.52-2.78 3.75-4.62 6.71-5.5.75 2.06 1.27 4.2 1.57 6.4-1.05.4-2.22.62-3.46.62Zm5.02-1.42a33.4 33.4 0 0 0-1.49-5.95c1.48-.16 3.08-.06 4.81.31a8.42 8.42 0 0 1-3.32 5.64Z" />
            </svg>
        </a>
    )
}
