import { LifeLine } from "react-loading-indicators";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <LifeLine></LifeLine>
        </div>
    );
};

export default Loader;