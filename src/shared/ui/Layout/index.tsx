import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";
import styles from "./styles.module.css";
import { useGetNavigationQuery, type INavigation } from "@/entities/navigation";
import { Col, Drawer, Row } from "antd";
import { useState } from "react";
import ArrowDownIcon from "@/shared/icons/ArrowDownIcon";
import { ROUTES } from "@/shared/constants";

const Layout = () => {
    const { data } = useGetNavigationQuery();

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const nav: INavigation[] = [
        {
            id: 1,
            name: "gasasgasg",
            children: [
                {
                    id: 12,
                    name: "25125",
                },
                {
                    id: 13,
                    name: "25125",
                },
            ],
        },
    ];
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <div>
                        <img src="/logo.svg" />
                    </div>
                    {nav.map((item) => (
                        <div key={item.id} className={styles["nav-item"]} onMouseEnter={showDrawer}>
                            <span>
                                <ArrowDownIcon />
                            </span>
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ flex: 1, position: "relative", overflow: "hidden", background: "#E0E8F0" }}>
                <Drawer
                    placement="top"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    getContainer={false}
                    styles={{ body: { background: "#fff", color: "#000", padding: 0 } }}
                >
                    <div style={{ background: "#fff", maxWidth: "1400px", margin: "auto" }}>
                        <Row gutter={16}>
                            {nav.map((item) => (
                                <Col span={4} key={item.id}>
                                    <Link
                                        onClick={onClose}
                                        to={`${ROUTES.PAGE}/${item.id}`}
                                        style={{ width: "fit-content" }}
                                    >
                                        {item.name}
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Drawer>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
