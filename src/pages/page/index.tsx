import { useGetPageIdQuery } from "@/entities/page";
import BreadCrumb from "@/shared/ui/BreadCrumb";
import { Loading } from "@/shared/ui/Loading";
import { useParams } from "react-router-dom";

const PagePage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetPageIdQuery(id!);
    return (
        <main style={{ maxWidth: "1400px", margin: "auto", padding: "40px 0 80px 0", color: "#000" }}>
            {isLoading || !data ? <Loading /> : <BreadCrumb items={data.breadcrumb} />}
            {isLoading || !data ? <Loading /> : <div dangerouslySetInnerHTML={{ __html: data.content }} />}
        </main>
    );
};

export default PagePage;
