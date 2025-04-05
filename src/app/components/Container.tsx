type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
    return (
        <div className={`w-full max-w-4xl mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
};

export default Container;