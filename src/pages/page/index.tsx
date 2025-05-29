import { useGetPageIdQuery } from "@/entities/page";
import BreadCrumb from "@/shared/ui/BreadCrumb";
import { Loading } from "@/shared/ui/Loading";
import { useParams } from "react-router-dom";

const PagePage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetPageIdQuery(id!);
    return (
        <main style={{ maxWidth: "1400px", margin: "auto", padding: "40px 0 80px 0" }}>
            <BreadCrumb
                items={[
                    { id: 1, name: "faasf" },
                    { id: 2, name: "5r215" },
                    { id: 3, name: "gagagsasg" },
                ]}
            />

            {isLoading ? <Loading /> : <div>fasfas</div>}
        </main>
    );
};

export default PagePage;
