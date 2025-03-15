"use client";

export default function Error({ error, reset }) {
    return <main className="error-main">
        <h1 className="error-heading">Something went wrong!</h1>
        <p className="error-message">{ error.message}</p>
        <button className="error-button" onClick={reset}>Try again</button>
    </main>
}