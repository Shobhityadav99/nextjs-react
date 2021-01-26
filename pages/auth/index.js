import React from 'react';
import Link from 'next/link';

const authIndexPage = () => (
    <div>
        <h1>The auth index Page</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
    </div>
);

export default authIndexPage;