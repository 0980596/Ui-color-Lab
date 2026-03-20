import { ChevronDown, PenTool, Menu, X } from "lucide-react";
import style from "./style.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        setMobileOpen(false);
        setTimeout(() => {
            window.location.href = path;
        }, 100);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollTop / docHeight;

            const bar = document.getElementById("progress-bar");
            if (bar) {
                bar.style.transform = `scaleX(${progress})`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div id="progress-bar" className={style.progressoBar}>
            </div>

            <header>

                <div className={style.nameweb}>
                    <PenTool />
                    <Link to="/">
                        <span>UI Color Lab</span>
                    </Link>
                </div>

                <nav>
                    <a target="_blank" rel="noreferrer" href="https://github.com/0980596">GitHub</a>
                    <a href="/docs">Docs</a>

                    <button className={style.templates}>
                        Templates <ChevronDown />
                        <div className={style.dropdown}>
                            <Link to="">Dashboard</Link>
                            <Link to="/post">Blog Post</Link>
                        </div>
                    </button>
                </nav>

                <button className={style.mobileMenuBtn} onClick={() => setMobileOpen(true)}>
                    <Menu />
                </button>

            </header>

            <div className={`${style.mobileNav} ${mobileOpen ? style.open : ''}`}>
                <button className={style.closeBtn} onClick={() => setMobileOpen(false)}>
                    <X />
                </button>
                <a href="/" onClick={(e) => handleLinkClick(e, "/")}>Home</a>
                <a target="_blank" rel="noreferrer" href="https://github.com/0980596">GitHub</a>
                <a href="/docs">Docs</a>
                <a href="/post" onClick={(e) => handleLinkClick(e, "/post")}>Blog Post</a>
            </div>
        </>
    )
}