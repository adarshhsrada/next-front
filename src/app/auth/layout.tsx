import Navbar from '../../components/navbar/page';

export default function AuthLayout( { children }: { children: React.ReactNode } ) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}