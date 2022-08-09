export default function Footer() {
    const date = new Date();

    return (
        <footer className='w-screen fixed bottom-0 bg-gray-200 bg-opacity-20'>
            <div className='wrapper flex flex-row m-auto items-center'>
                <div className='m-auto text-center'>
                    <span>{date.getFullYear()}&copy; UnknownRori</span>
                </div>
            </div>
        </footer>
    );
}