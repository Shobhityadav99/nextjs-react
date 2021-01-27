import React from 'react';
import Link from 'next/link';
import User from '../../components/user';

const authIndexPage = () => (
    <div>
        <h1>The auth index Page</h1>
        <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
        <User name="Shhobhit"/>
    </div>
);

export default authIndexPage;