import WithAuth from '../../../route-gaurds/loginGaurd';
import { Suspense } from 'react';
import Loading from '@/components/loading/loading';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <WithAuth>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </WithAuth>
    )
}