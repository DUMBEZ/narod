import ArrowRightIcon from "@/shared/icons/ArrowRightIcon";
import { Space } from "antd";

const BreadCrumb = ({ items }: { items: { id: number; name: string }[] }) => {
    return (
        <div>
            <Space
                split={<ArrowRightIcon />}
                align="baseline"
                styles={{
                    item: {
                        color: "#555555",
                        fontSize: "16px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        lineHeight: "20px",
                        margin: "auto",
                        opacity: 0.5,
                    },
                }}
                style={{ height: "20px" }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            color: "#555",
                            fontSize: "16px",
                            fontWeight: 500,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </Space>
        </div>
    );
};

export default BreadCrumb;
